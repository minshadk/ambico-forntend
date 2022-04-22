import { useState } from "react";

import { Typography, Grid, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";
import Maps from "../../map/Maps";

// Importing backend services

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    console.log("handle submit called");
    const data = {};
    console.log(data);
    console.log("its hi");
  };

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
          Login Driver
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          //   direction="column"
          //   justifyContent="center"
          //   alignItems="center"
          spacing={2}
          rowSpacing={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="email"
              label="Email"
              textValue={email}
              setTextValue={setEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="password"
              label="Password"
              textValue={password}
              setTextValue={setPassword}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant="contained" color="success" onClick={handleSubmit} sx={{marginTop:3}}>
            Submit
          </Button>
        </Grid>
      </Box>
    </FormWrapper>
  );
}
