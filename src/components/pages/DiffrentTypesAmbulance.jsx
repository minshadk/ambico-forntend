import { useNavigate } from "react-router-dom";

import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

import AppNavBar from "../utils/Navigation/NavigationBar/AppNavBar";
import { PageWrapper } from "../utils/PageWrapper";

import advanceLifeSupport from "../../Assets/Images/advanceLifeSupport.jpeg";
import basicAmbulance from "../../Assets/Images/basicAmbulance.jpeg";
import mortuary from "../../Assets/Images/mortuary.jpeg";
import patientTransport from "../../Assets/Images/patientTransport.jpeg";

export default function DiffrentTypesAmbulance() {
  const navigate = useNavigate();

  return (
    <>
      <AppNavBar />
      <PageWrapper>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2">Type of Ambulance</Typography>
          </Grid>
          <Box sx={{ marginY: 10 }}>
            <Grid container sx={{ marginBottom: 20 }}>
              <Grid item xs={8}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent={"center"}
                  spacing={10}
                >
                  <Typography variant="h3">Basic Ambulance</Typography>
                  <Typography variant="h4">
                    Basic Life Support Amblulance is for the patient who need
                    medical transportation .It comprises of patient bed puise
                    oximetry and oxygen delivery devices
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={basicAmbulance} height="200px" />
              </Grid>
            </Grid>
            <Grid container sx={{ marginBottom: 20 }}>
              <Grid item xs={8}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent={"center"}
                  spacing={10}
                >
                  <Typography variant="h3">Mortuary Ambulance</Typography>
                  <Typography variant="h4">
                    Mortuary Ambulance ambulance Services are used for the
                    transportation of the dead body .It is also called as Hearse
                    Van
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={mortuary} height="200px" />
              </Grid>
            </Grid>
            <Grid container sx={{ marginBottom: 20 }}>
              <Grid item xs={8}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent={"center"}
                  spacing={10}
                >
                  <Typography variant="h3">
                    Patient Transport Vehicle
                  </Typography>
                  <Typography variant="h4">
                    pTV is a non emergency patient transport vehicle equipped
                    with patient bed & other life-support devices
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={patientTransport} height="200px" />
              </Grid>
            </Grid>
            <Grid container sx={{ marginBottom: 300 }}>
              <Grid item xs={8}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent={"center"}
                  spacing={10}
                >
                  <Typography variant="h3">Advance Ambulance</Typography>
                  <Typography variant="h4">
                    ALS ambulance is equipped with ventilator,ECG ,monitoring
                    devices and paramedic statf
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={advanceLifeSupport} height="200px" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </PageWrapper>
    </>
  );
}
