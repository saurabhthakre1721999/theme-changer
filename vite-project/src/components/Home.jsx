import { colors } from "@mui/material";
import { Context } from "./usecontext/dataprovider";
import { useContext } from "react";

const Home = () => {
  const { Theme, Themechanger } = useContext(Context);
  return (
    <div
      style={{
        color: Theme ? "white" : "black",
        backgroundColor: Theme ? "black" : "white",
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
        Welcome to Home
      </h1>
      <button
        onClick={(e) => Themechanger(!Theme)}
        style={{
          color: Theme ? "white" : "black",
          backgroundColor: Theme ? "black" : "white",
        }}
      >
        {" "}
        ThemeChanger
      </button>
    </div>
  );
};
export default Home;
