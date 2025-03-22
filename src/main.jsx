import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);