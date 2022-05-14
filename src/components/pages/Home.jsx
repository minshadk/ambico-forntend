import { Typography, Grid, Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "4rem" }}>Ambico</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "2rem" }}>
            Amblulance emergencies !
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "1rem" }}>
            Ambico is right here at your fingertips
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "1rem" }}>
            Our goal is to save lives by providing ambulance in the shortest
            posible time
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate(`/ambulanceRequest`);
            }}
          >
            Find Ambulance
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ margin: 3 }}
            onClick={() => {
              navigate(`/register`);
            }}
          >
            Register 
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate(`/hospitalRequest`);
            }}
          >
            Find Hospital
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
