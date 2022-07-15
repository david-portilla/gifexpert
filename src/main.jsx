import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";

const portalDiv = document.getElementById("root");

portalDiv &&
  ReactDOM.createRoot(portalDiv).render(
    <React.StrictMode>
      <GifExpertApp />
    </React.StrictMode>
  );