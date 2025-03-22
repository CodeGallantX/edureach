import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        {/* <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>  Access the Google Client ID from the environment variable */}
        <GoogleOAuthProvider clientId="863921567920-ht5j7iok7ocqdbgtqc24a2fdgmllgo06.apps.googleusercontent.com">  {/*Access the Google Client ID from the environment variable*/}
          <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);