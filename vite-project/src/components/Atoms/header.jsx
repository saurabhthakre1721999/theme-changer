import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <Box>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item xs={1}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Style>Home</Style>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Style>About</Style>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Style>Contact</Style>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
const Style = styled.span`
  text-decoration: none;
  color: black;
`;
