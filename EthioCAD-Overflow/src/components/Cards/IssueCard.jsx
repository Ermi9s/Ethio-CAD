import { React, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function IssueCard() {
  return (
    <>
      <Box
        marginTop={7}
        sx={{
          borderRadius: 7,
          paddingTop: 2,
          paddingLeft: 2,
          marginBottom: 3,
          marginX: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: "#22221A",
        }}
      >
        <Box
          margin={2}
          sx={{
            marginLeft: 6,
            padding: 2,
            //   padding : 12,tempo
            display: "flex",
            justifyContent: "start",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
            textOverflow: "ellipsis",
            backgroundColor: "#22221A",
          }}
        >
          <Box marginBottom={5}>
          <Grid container>
          <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Box
              >
                <Typography variant="h5" color={"white"} fontWeight={"bold"}>
                  Title : Load Combinations
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
    
                <Button
                  sx={{
                    backgroundColor: "green",
                    width: "10%",
                    fontFamily: "sarif",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Solve
                </Button>
            </Grid>
          </Grid>
          </Box>

          <Typography color={"white"} marginLeft={4}  textAlign={"justify"} sx ={{ alignItems : "start" ,}}>
            Eurocodes and ACI codes have different load combination formulas.
            For example, Eurocode 1 specifies load combinations for ultimate
            limit states that may differ from those in ACI 318.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography fontFamily={"cursive"} fontWeight={"bold"}>
              <span style={{ color: "#0065DC" }}>BY</span> :{" "}
              <PersonIcon sx={{ color: "#0065DC" }} />{" "}
              <span style={{ color: "#0065DC" }}>Dr Abera Mola</span>
            </Typography>
            <Typography
              variant="p"
              fontFamily={"cursive"}
              sx={{
                marginLeft: 3,
                color: "#535452",
              }}
            >
              Occupation : Architectural Engineer
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr />
    </>
  );
}
export default IssueCard;
