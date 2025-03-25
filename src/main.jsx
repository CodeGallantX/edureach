import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"
import App from './App';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || window.__ENV__.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider 
        clientId={clientId}
        onScriptLoadSuccess={() => console.log("Google OAuth script loaded")}
        onScriptLoadError={() => console.error("Google OAuth script failed to load")}
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);