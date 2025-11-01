import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/custom-bulma.scss';


createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="/darshitshah-portfolio">
                <App />
        </BrowserRouter>
    </React.StrictMode>
);
