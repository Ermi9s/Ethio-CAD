import React from "react";
import { Box, Modal, Typography, TextField, Button , Divider } from "@mui/material";
function Issue({open , handleClose}) {
  return (
    <>
    <Modal
    open = {open}
    onClose={handleClose}
    >

      <Box className="issue-content">
      <Typography sx={{
        alignSelf : "center",
        margin : 4,
      }}
        fontWeight={"bold"}
        variant="h4"
        fontFamily={"cursive"}
      >
        Raise An Issue
      </Typography>

      <Divider sx={{ alignSelf : "center" , width : "75%" , height : "5px"}}/>

        <Typography variant={"h2"} sx={{ marginBottom: 3, marginX: 10 }}>
          Topic
        </Typography>
        <TextField
          id="topic"
          rows={1}
          variant="outlined"
          sx={{
            alignSelf: "start",
            width: "20%",
            marginBottom: 3,
            marginX: 10,
          }}
        />

        <Typography
          variant={"h2"}
          className="desc"
          sx={{ marginBottom: 3, marginX: 10 }}
        >
          Description
        </Typography>

        <TextField
          id="topic"
          multiline
          rows={4}
          variant="outlined"
          sx={{
            alignSelf: "start",
            width: "60%",
            marginBottom: 3,
            marginX: 10,
          }}
        />

        <Button
          sx={{
            marginBottom: 3,
            marginX: 10,
            backgroundColor: "#ab8b51",
            "&:hover": {
              backgroundColor: "#ac7818",
            },
            alignSelf: "end",
            width: "10%",
            color : "white"
          }}
        >
          Issue
        </Button>
      </Box>
      </Modal>
    </>
  );
}

export default Issue;
