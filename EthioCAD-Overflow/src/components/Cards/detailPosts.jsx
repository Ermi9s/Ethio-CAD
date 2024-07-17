import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CommentCard from "./commentCard";

function DetailPosts({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="Post detail">
      <Box
        marginTop={7}
        sx={{
          borderRadius: 5,
          paddingTop: 2,
          paddingLeft: 2,
          marginBottom: 3,
          marginX: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          alignSelf : "center",
          backgroundColor: "#c4b89d",
          maxWidth: "100%",
          maxHeight: "85%",  // Limiting max height of modal
          overflowY: "auto",  // Adding vertical scroll
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
          margin={2}
          sx={{
            borderRadius: 5,
            marginLeft: 8,
            padding: 5,
            display: "flex",
            justifyContent: "start",
            backgroundColor: "#c4b89d",
          }}
        >
          <Typography>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Typography>
        </Box>

        <Divider sx={{ alignSelf : "center" , width : "80%" }} > comments </Divider>
          
         <CommentCard/> 
         <CommentCard/> 
         <CommentCard/> 
         <CommentCard/> 
         
        <Box sx={{ margin: 2, alignSelf: "center", width: "80%" }}>
          <TextField
            id="outlined-multiline-static"
            label="Make Comment"
            multiline
            rows={4}
            variant="outlined"
            sx={{
              alignSelf: "center",
              width: "100%",
            }}
          />
          <Button
            //   onClick={handleClose}
            sx={{
              backgroundColor: "#b9892d",
              marginTop: 3,
              marginBottom: 3,
              marginRight: 6,
              color: "white",
              alignSelf: "end",
            }}
          >
            Comment
          </Button>
        </Box>

        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: "#b9892d",
            marginTop: 3,
            marginBottom: 3,
            marginRight: 6,
            color: "white",
            alignSelf: "end",
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default DetailPosts;
