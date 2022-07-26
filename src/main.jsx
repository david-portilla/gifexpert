import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifExpertApp";
import "./styles.css";

const portalDiv = document.getElementById("root");

portalDiv &&
  ReactDOM.createRoot(portalDiv).render(
    <React.StrictMode>
      <GifApp />
    </React.StrictMode>
  );
