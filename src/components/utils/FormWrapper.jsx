import { Typography, Box, Card } from "@mui/material";

import { PageWrapper } from "../utils/PageWrapper";

export default function FormWrapper(props) {
  return (
    <PageWrapper>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* {props.children} */}
        <Card
          sx={{
            minHeight: 500,
            minWidth: 400,
            padding:5,
            maxWidth:600,
            borderRadius:17
          }}
        >
          {props.children}
        </Card>
      </Box>
    </PageWrapper>
  );
}
