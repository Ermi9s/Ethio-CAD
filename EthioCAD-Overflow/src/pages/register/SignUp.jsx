import React from "react";
import img from "../../assets/static/loginimage.jpg";
import GoogleLogo from "../../assets/static/Google__G__logo.svg.png";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


function SignUp() {

  const navigate = useNavigate();
  return (
    <>
      <Box m={0} >
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            component={Box}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                my: 0,
                mx: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" fontWeight="bold"
              sx={{
                marginTop : 8,
              }}
              
              >
                Create an Account
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
                    Continue with Google
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
        
              <Box component="form" Validate sx={{ mt: 0 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" required>
                      <InputLabel id="occupation-label">Occupation</InputLabel>
                      <Select
                        labelId="occupation-label"
                        id="occupation"
                        label="Occupation"
                        defaultValue=""
                      >
                        <MenuItem value="developer">Developer</MenuItem>
                        <MenuItem value="engineer">Engineer</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#b9892d",
                    borderRadius: 7,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#a17827",
                    },
                    mt: 3,
                    mb: 2,
                  }}
                >
                  Sign Up
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Button 
                    onClick={() => {navigate('/login')}}
                    sx={{ textTransform: "none" }}>
                      Already have an account? Sign In
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

export default SignUp;
