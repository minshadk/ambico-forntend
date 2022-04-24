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
import ambulanceServices from "./../../../services/hospital";

export default function HospitalResult() {
  let { requestId } = useParams();
  //   const requestId = "62630cbfe62670aa96d7aad2";
  const [hospitals, setHospitals] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      const response = await ambulanceServices.getAmbulanceByRadius(requestId);
      setHospitals(response.data.hospitals);
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
          Hospitals are listed in Accending Order of distance
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
        {hospitals &&
          hospitals.map((hospital, index) =>
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
                    // color="text.secondary"
                    gutterBottom
                  >
                    {hospital && hospital.name}
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
                    {hospital && hospital.phoneNumber}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          )}
      </Box>
    </PageWrapper>
  );
}
