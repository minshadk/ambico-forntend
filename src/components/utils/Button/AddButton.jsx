import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function AddButton(props) {
  const navigate = useNavigate();
  const { path } = props;

  const handelOnClick = () => {
    console.log("ON click called");
    navigate(path);
  };
  console.log(path);
  return (
    <Button variant="contained" color="success" onClick={handelOnClick}>
      {props.children}
    </Button>
  );
}
