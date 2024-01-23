import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './App.css';

export default function Footer() {
  return (
    <div className="yy"> 
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "blue"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg" marginTop="10%"  >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
               This is a portal to register your complains with a photo proof
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
            Contents owned and updated by concerned Departments and coordinated by Information Technology Department Secretariat,
Fort St. George, Chennai 600 009, Tamil Nadu, India
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
            E-Mail: webadmin.tn@nic.in
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
              Phone: +91-9345587584
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography >
            <Link href="https://www.facebook.com/CMOTamilnadu/" color="inherit" sx={{color:"white"}}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{color:"white"}}
             
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" sx={{color:"white"}}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{color:"white"}}>
            {"Copyright © "}
            <Link color="inherit" href="https://www.tn.gov.in/grievance" sx={{color:"white"}}>
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
  );
}
