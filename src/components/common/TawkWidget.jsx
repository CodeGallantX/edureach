import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TawkWidget = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
    
    // Only load Tawk widget if user is logged in and on a dashboard page
    if (authToken && (location.pathname.includes('/student/') || location.pathname.includes('/teacher/'))) {
      // Remove any existing Tawk script
      const existingScript = document.getElementById('tawkto-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Create and append the Tawk script
      const script = document.createElement('script');
      script.id = 'tawkto-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/65f2a8d98d261e1b5f6c8c5c/default';
      script.setAttribute('data-status', 'ready');
      document.body.appendChild(script);
      
      return () => {
        // Clean up when component unmounts
        if (script) {
          script.remove();
        }
      };
    }
  }, [location.pathname]);
  
  // Don't render anything if not logged in or not on dashboard
  if (!isLoggedIn || (!location.pathname.includes('/student/') && !location.pathname.includes('/teacher/'))) {
    return null;
  }
  
  return null; // This component doesn't render anything visible
};

export default TawkWidget; 