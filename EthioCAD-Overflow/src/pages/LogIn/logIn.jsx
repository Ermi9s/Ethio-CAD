import React from "react";
import img from "../../assets/static/loginimage.jpg";
import GoogleLogo from "../../assets/static/Google__G__logo.svg.png";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function logIn() {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={0}>
        <Grid container component="main">
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                my: 0,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  marginTop: 8,
                }}
              >
                Welcome Back
              </Typography>

              <Box
                sx={{
                  width: 350,
                  height: 30,
                  borderRadius: 6,
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  margin: "3rem",
                }}
              >
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  style={{ marginRight: "10px", height: "24px", width: "24px" }}
                />
                <a href="#">
                  <Typography variant="h7" fontWeight="bold" color={"black"}>
                    continue with google
                  </Typography>
                </a>
              </Box>

              <Box
                sx={{ width: "45%", borderBottom: "1px solid #ccc", mr: 2 }}
              />
              <Divider sx={{ alignSelf: "center", width: "80%" }}>
               
                <Typography variant="body1" color="text.secondary" margin="0">
                  OR
                </Typography>
              </Divider>

              <Box
                sx={{ width: "45%", borderBottom: "1px solid #ccc", ml: 2 }}
              />

              <Box component="form" Validate sx={{ mt: 3 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    marginTop: 6,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    navigate("/ethioCAD");
                  }}
                  sx={{
                    backgroundColor: "#b9892d",
                    borderRadius: 7,
                    marginTop: 6,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#a17827",
                    },
                    mt: 3,
                    mb: 2,
                    // px: 4,
                  }}
                >
                  Sign In
                </Button>
                <Grid container display={"flex"} flexDirection={"colunm"}>
                  <Grid item xs>
                    <Button sx={{ textTransform: "none" }}>
                      Forgot password?
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => {
                        navigate("/sign-up");
                      }}
                      sx={{ textTransform: "none" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={false} sm={6} md={6}>
            <Box
              sx={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default logIn;
