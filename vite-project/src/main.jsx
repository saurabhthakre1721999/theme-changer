import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import { Route } from "react-router";
import Routes from "./Navigator/routes.jsx";
import Navigate from "./Navigator/routes.jsx";
import { TimerDemo } from "./mayur.jsx";
import Progress from "../progress.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<Progress />);
