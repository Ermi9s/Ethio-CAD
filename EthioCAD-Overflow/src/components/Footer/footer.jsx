import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return ReactDOM.createPortal(
    <Box bgcolor="black" color="white" p={2} mt={0} mb={0} height={160}>
      <Box display="flex" justifyContent="space-around" mb={2}>
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="sans-serif"
            color="red"
          >
            EthioCAD
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="sans-serif"
            color="white"
          >
            OverFlow
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              About Us
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Email Us
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Careers
            </a>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Support</Typography>
          <Typography variant="body1">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              FAQs
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Refund Policy
            </a>
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            Socials
          </Typography>
          <div>
            info@ethiocad.com
            <EmailIcon style={{ color: "white", fontSize: 20, marginTop: 10 }} /> 
          </div>

          <div>
            @ethiocadoverflow
            <InstagramIcon
              style={{ color: "white", fontSize: 20, marginTop: 10 }}
            /> 
          </div>
        </Box>
      </Box>
      <hr style={{ borderColor: "white" }} />
    </Box>,
    document.getElementById("footer")
  );
};

export default Footer;
