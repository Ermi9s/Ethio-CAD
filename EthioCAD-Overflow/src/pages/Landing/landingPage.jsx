import React from "react";
import { Box, Typography, Grid , Button } from "@mui/material";
import main from "../../assets/static/Construction promo video_360p.mp4";
import oldGuy from "../../assets/static/oldeng.jpg";
import eng1 from "../../assets/static/eng1.jpg";
import engs from "../../assets/static/engs.jpg";
import { useNavigate } from "react-router-dom";


function landingPage() {
  const navigate = useNavigate();
  return (
    <Box m={1}>
      <Grid container component="main">
        <Grid
          item
          xs={false}
          sm={3}
          md={7}
          component={Box}
          display="flex"
          alignItems="center"
          justifyContent={"space-around"}
          p={2}
          spacing={2}
        >
          <video autoPlay controls loop muted src={main}></video>
        </Grid>

        <Grid
          item
          xs={false}
          sm={3}
          md={5}
          component={Box}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          p={2}
          spacing={2}
        >
          <Typography valriant={"h1"} fontSize={25} fontFamily={"fantasy"}>
            Place where civil engineers and designers share ideas regarding
            building and construction designs.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          alignItems={"center"}
          padding={10}
          marginTop={5}
        >
          <Typography valriant={"p"} fontSize={18}>
            Discover EthioCAD Overflow, where structural and civil engineers
            converge with skilled developers and coders to revolutionize your
            engineering workflow. Dive into a dynamic platform where innovation
            meets expertise, empowering you to automate tasks seamlessly within
            your preferred software tools. Join a thriving community dedicated
            to sharing knowledge, refining skills, and fostering collaboration.
            Whether you're enhancing structural analysis, optimizing building
            designs, or exploring new technological frontiers, EthioCAD Overflow
            is your gateway to efficiency and growth in engineering. Embrace the
            future of engineering collaboration—join EthioCAD Overflow today and
            elevate your projects to new heights.
          </Typography>
        </Grid>

        {/* d----------------------------------------- */}

        <Grid
        item
        display={"flex"}
        flexDirection={"row"}
        xs = {12}
        justifyContent={"center"}
        >
          <Button
          onClick={() =>{navigate('/login')}}
          sx={{
            backgroundColor: "#b9892d",
            borderRadius : 7,
            width : 400,
            height: 60,
            color: "white", 
            "&:hover": {
              backgroundColor: "#a17827", 
            },
            
            mt: 3,
          }}
          >
            Get Started
          </Button>

        </Grid>

        <Grid
          item
          marginTop={10}
          alignItems="center"
          borderTop="2px solid rgba(0, 0, 0, 0.5)" 
          sm={6}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          spacing={2}
        >
          <Grid
            item
            sm={3}
            md={5}
            component={Box}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            marginTop={4}
          >
            <img
              src={oldGuy}
              alt="enginners"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid
            item
            sm={3}
            md={5}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            marginTop={4}
          >
            <Typography valriant={"h7"} fontSize={25} fontFamily={"sans-serif"}>
              You can reach to fellow engineers and designers so that you can
              have latest update on policies and some other technologies.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          marginTop={10}
          alignItems="center"
          borderTop="2px solid rgba(0, 0, 0, 0.5)" 
          sm={3}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          spacing={2}
        >
          <Grid item sm={3} md={5} display="flex" alignItems="center" marginTop={4}>
            <img
              src={eng1}
              alt="enginners"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item sm={3} md={5} display="flex" alignItems="center">
            <Typography valriant={"h7"} fontSize={25} fontFamily={"sans-serif"}>
              Also students on those fields can ask field related question, then
              get reliable response from senior engineers.
            </Typography>
          </Grid>
        </Grid>


        <div style={
          {
            backgroundColor : "#D3CFCF",
            display :"flex",
            flexDirection : "row",
            marginTop :20,
          }
        }>
        <Grid item xs={false} sm={6} md={6} marginTop={8}>
          <img
            sizes="10px"
            src={engs}
            alt="enginners"
            style={{
              width: "70%",
              height: "auto",
            }}
          />
        </Grid>

        <Grid
          item
          xs={false}
          sm={3}
          md={5}
          component={Box}
          display="flex"
          alignItems="center"
          justifyContent="start"
          p={2}
          spacing={2}
          marginTop={8}
        >
          <Typography valriant={"h7"} fontSize={25} fontFamily={"sans-serif"}>
            You can raise issues you face while working with software such as
            etabs, safe or any other designing software for software developers
            and they might provide you with fixes for your problems.
          </Typography>
        </Grid>
      </div>
      </Grid>
    </Box>
  );
}

export default landingPage;
