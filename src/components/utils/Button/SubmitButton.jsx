import Button from "@mui/material/Button";

import React from "react";

export default function SubmitButton(props) {
  return <Button variant="outlined">{props.children}</Button>;
}
