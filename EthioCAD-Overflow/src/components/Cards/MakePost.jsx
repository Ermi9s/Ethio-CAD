import React from "react";
import { Box, Modal, Typography, TextField, Button , Divider } from "@mui/material";


function MakePost({open , handleClose}) {
  return (
    <>
    <Modal
    open = {open}
    onClose={handleClose}
    >

      <Box
      margin={7}
        sx={
            {
               display : "flex",
               flexDirection : "column",
               backgroundColor : "#afafaf", 
               borderRadius : 7,
               
            }
        }
      >
      <Typography sx={{
        alignSelf : "center",
        margin : 4,
        color : "black" 
      }}
        fontWeight={"bold"}
        variant="h4"
        fontFamily={"sans-serif"}
      >
        Post
      </Typography>

      <Divider sx={{ alignSelf : "center" , width : "75%" , height : "5px" , color : "#33322f" }}/>

        <Typography variant={"body1"} sx={{ marginBottom: 3, marginX: 10 , color : "#33322f"  }}>
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
          variant={"body1"}
          className="desc"
          sx={{ marginBottom: 3, marginX: 10 , color : "#33322f"  }}
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
            color : "#afafaf" 
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
          POST
        </Button>
      </Box>
      </Modal>
    </>
  );
}

export default MakePost;
