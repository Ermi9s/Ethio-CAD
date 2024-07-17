import {React , useState }from "react";
import { Box, Typography , Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DetailPosts from "./detailPosts";

function mainPost() {
  const [open , setOpen] = useState(false);

  const handleClose = () => {setOpen(false)}
  const handleOpen = () => {setOpen(true)}

  return (
    <>
    <Box
      marginTop={7}
      sx={{
        borderRadius: 5,
        paddingTop: 2,
        paddingLeft: 2,
        marginBottom : 3,
        marginX : 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        backgroundColor : "#c4b89d"
      }}
    >
      <Typography fontFamily={"cursive"} fontWeight={"bold"}>
        <PersonIcon /> user name
      </Typography>
      <Typography
        variant="p"
        fontFamily={"cursive"}
        sx={{
          marginLeft: 3,
          color: "#535452",
        }}
      >
        Occupation : Engineer
      </Typography>

      <Box
        margin={2}
        sx={{
          borderRadius: 5,
          marginLeft: 8,
          padding: 5,
          //   padding : 12,tempo
          display: "flex",
          justifyContent: "start",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
          textOverflow: "ellipsis",
          backgroundColor : "#c4b89d"
        }}
      >
        <Typography>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
      </Box>
      <Button
        sx={{
            backgroundColor : "#b9892d",
            marginTop : 3,
            marginBottom : 3,
            marginRight : 6,
            color :"white",
            alignSelf :"end"
        }}
        onClick={handleOpen}
      >
        View More
      </Button>

      <DetailPosts open={open} handleClose={handleClose} />
    </Box>
    <hr />
    </>
  );
}

export default mainPost;
