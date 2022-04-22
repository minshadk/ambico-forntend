import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Test } from "../../../Assets/Images/ImageSemiAutoImport";

// import HandsShakeImgae from "../../../Assets/Images/handsshake.jpg";
// import search from "../../../Assets/Images/search.png";

// icons
// import AccessibleIcon from '@mui/icons-material/Accessible';

export default function ImageCard(props) {
  const { title, description } = props;

  return (
    <Card
      sx={{
        maxWidth: 270,
        maxHeight:250,
        // padding: 1 ,
        paddingX: 2,
        // paddingY:4,
        borderRadius: "5px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM="
          alt="green iguana"
          // sx={{minHeight:50}}
        />
        {/* <CardMedia
          component="img"
          // height=""
          // image="https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM="
          image={search}
          alt="green iguana"
          sx={{ objectFit: "cover", maxHeight:100,maxWidth:100}}
        /> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
