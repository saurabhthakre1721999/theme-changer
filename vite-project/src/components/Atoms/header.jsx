import React, { useContext } from "react";
import { Box, Grid, colors } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../usecontext/dataprovider";

const Header = () => {
  const { Theme, Themechanger } = useContext(Context);
  return (
    <Box
      style={{
        backgroundColor: Theme ? "black" : "white",
        height: "50px",
      }}
    >
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item xs={1}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Style style={{ color: Theme ? "white" : "black" }}>Home</Style>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Style style={{ color: Theme ? "white" : "black" }}>About</Style>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Style style={{ color: Theme ? "white" : "black" }}>Contact</Style>
          </Link>
        </Grid>{" "}
        <Grid item xs={1}>
          <button
            onClick={(e) => Themechanger(!Theme)}
            style={{
              color: Theme ? "white" : "black",
              backgroundColor: Theme ? "black" : "white",
            }}
          >
            {" "}
            Dark
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
const Style = styled.span`
  text-decoration: none;
  color: Theme?"white":"black";
`;
