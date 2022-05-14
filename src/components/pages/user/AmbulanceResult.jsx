import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  Card
} from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";

// Importing backend services
import hospitalServices from "./../../../services/hospitalServices";

export default function AmbulanceResult() {
  let { requestId } = useParams();
  const [ambulances, setAmbulances] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      const response = await hospitalServices.getHospitalByRadius(requestId);
      console.log(response);
      setAmbulances(response.data.hospital);
    };
    callBackendServices();
  }, []);

  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4">
          Hospital are listed in Accending Order of distance
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8
        }}
      >
        {ambulances &&
          ambulances.map((ambulance, index) =>
            <Card
              sx={{ minWidth: 600, maxWidth: 700, padding: 2, marginTop: 3 }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Driver Name
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                  >
                    {ambulance && ambulance.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Driver Phone Number
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {ambulance && ambulance.phoneNumber}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Type
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                  >
                    {ambulance && ambulance.type}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          )}
      </Box>
    </PageWrapper>
  );
}
