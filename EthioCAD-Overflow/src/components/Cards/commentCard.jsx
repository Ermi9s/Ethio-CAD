import React from "react";
import { Box, Typography , Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function commentCard() {
  return (
    <Box
      margin={4}
      marginX={14}
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignContent: "start",
        paddingLeft: 6,
        backgroundColor : "#8f8461",
        borderRadius : 5,
      }}
    >
      <Typography fontFamily="cursive" fontWeight="bold">
        <PersonIcon /> user name
      </Typography>
      <Typography
        variant="body1"
        fontFamily="cursive"
        sx={{
          marginLeft: 3,
          color: "#535452",
        }}
      >
        Occupation: Engineer
      </Typography>

      <Box
        margin={1}
        marginX={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignContent: "start",
          paddingLeft: 6,
        }}
      >
        <Typography>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Typography>
      </Box>
      <Divider sx={{ alignSelf : "center" , width : "80%" , textAlign : "right" }} > 7/13/2024</Divider>
    </Box>
  );
}

export default commentCard;
