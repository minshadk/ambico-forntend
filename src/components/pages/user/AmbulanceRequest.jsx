import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Grid, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";
import Maps from "../../map/Maps";

// Importing backend services
import ambulanceRequestServices from "../../../services/ambulanceRequest";

export default function AmbulanceRequest() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [coordinates, setCoordinates] = useState();
  const [ambulanceRequest, setAmbulanceRequest] = useState();

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

  console.log(coordinates);

  const handleSubmit = async () => {
    console.log("handle submit called");
    const data = {
      name,
      phoneNumber,
      location: { type: "Point", coordinates },
    };
    console.log(data);

    const response = await ambulanceRequestServices.findAmbulance(data);
    setAmbulanceRequest(response.data.ambulanceRequest);
    if(ambulanceRequest._id) {
      navigate(`/findAbulance`);
    };
  };

  const handleCoordinates = coordinate => {
    console.log("handle coordinates called");
    setCoordinates(coordinate);
    console.log(coordinates);
  };

  console.log(coordinates);

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
          Find Ambulance
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
              name="name"
              label="Name"
              textValue={name}
              setTextValue={setName}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="phoneNumber"
              label="Phone Number"
              textValue={phoneNumber}
              setTextValue={setPhoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="location"
              label="Location"
              textValue={coordinates}
              setTextValue={setCoordinates}
            />
          </Grid>
          <Button onClick={handleOpen}>Set Location</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Box>
      {/* </Card> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Maps handleCoordinates={handleCoordinates} handleClose={handleClose} />
      </Modal>
    </FormWrapper>
  );
}
