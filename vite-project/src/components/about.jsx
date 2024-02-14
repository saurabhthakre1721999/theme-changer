import React, { useContext } from "react";
import { Context } from "./usecontext/dataprovider";

const About = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {" "}
      <h1
        style={{
          margin: "0px",
          padding: "10px",
        }}
      >
        Welcome to About
      </h1>
    </div>
  );
};
export default About;
