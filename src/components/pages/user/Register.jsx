import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Grid, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import FormWrapper from "../../utils/FormWrapper";

// Importing backend services

export default function Register() {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{ marginTop: 10 }}
        >
          Register
        </Typography>
      </Grid>
      <Box>
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* <Typography variant="h2">Type of Ambulance</Typography> */}
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  navigate("/registerAmbulance");
                }}
                sx={{ marginTop: 3 }}
              >
                Register Ambulance
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  navigate("/registerHospital");
                }}
                sx={{ marginTop: 3 }}
              >
                Register Hospital
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </FormWrapper>
  );
}
