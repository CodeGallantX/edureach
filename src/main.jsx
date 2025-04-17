// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"
import App from './App';

// Explicitly set the client ID
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Ensure client ID is defined
if (!clientId) {
  console.error("Google Client ID is not defined");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider 
        clientId={clientId}
        onScriptLoadError={(error) => {
          console.error("Google OAuth script load error:", error);
        }}
        onScriptLoadSuccess={() => {
          console.log("Google OAuth script loaded successfully");
        }}
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);