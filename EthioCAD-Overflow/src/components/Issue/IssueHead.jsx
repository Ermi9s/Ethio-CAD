import {React , useState }from 'react'
import { Box, Typography, Grid , Button } from "@mui/material";
import frontImg from "../../assets/static/frontwhite.avif"
import Issue from "./Issue";

function IssueHead() {
const [open , setOpen] = useState();

const handleOpen = () =>{setOpen(true)}
const handleClose = () => {setOpen(false)}

  return (
    <>
    <hr />
    <Box
      marginTop={5}
      sx={{
        borderRadius: 5,
        padding: 2,
        paddingLeft: 9,
        marginBottom: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        backgroundColor: "#515151",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            fontFamily={"cursive"}
            fontWeight={"bold"}
            sx={{ marginBottom: 2 , color : "#afafaf" }}
          >
            Make life easy for others <br />
            solve an Issue
          </Typography>

          <Typography
            variant="p"
            fontSize={18}
            sx={{ color: "#afafaf", marginTop: 2 }}
          >
            number of users : 1383
          </Typography>
          <Typography
            variant="p"
            fontSize={18}
            sx={{ color: "#afafaf", marginTop: 2 }}
          >
            Average Issues raised : 4 Issues/day
          </Typography>
          <Typography
            variant="p"
            fontSize={18}
            sx={{ color: "#afafaf", marginTop: 2 }}
          >
            Resolve rate : 3.2 Issues/day
          </Typography>

          <Typography
            variant="p"
            fontSize={18}
            sx={{ color: "#afafaf", marginTop: 2 }}
          >
            Issues: 23
          </Typography>
        </Grid>

        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            alignItems: "start",
          }}
        >
        <img src={frontImg} alt="" />

        </Grid>
      </Grid>
        <Button
            sx = {{
                margin : 2,
                backgroundColor : "#afafaf",
                color : "black",
                fontFamily : "sans-serif"
            }}
            onClick={handleOpen}
        >
            Raise An Issue
        </Button>
        <Issue open = {open} handleClose={handleClose}/>
    </Box>
    </>
  )
}

export default IssueHead
