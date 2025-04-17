import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchWithCORS } from '../../utils/api';

const GoogleCallback = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the authorization code from the URL
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          setError('No authorization code received');
          setLoading(false);
          return;
        }

        // Exchange the code for tokens using our utility function
        const response = await fetchWithCORS('https://e-sdg.onrender.com/auth/google/callback', {
          method: 'POST',
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error('Failed to authenticate with Google');
        }

        const data = await response.json();

        if (data.success) {
          // Store the authentication token
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userData', JSON.stringify(data.userData));
          
          // Redirect to dashboard
          navigate('/student/dashboard');
        } else {
          setError(data.message || 'Authentication failed');
        }
      } catch (err) {
        console.error('Google authentication error:', err);
        setError('Failed to authenticate with Google. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    handleCallback();
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Authenticating with Google...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
        <button
          onClick={() => navigate('/auth/login')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Return to Login
        </button>
      </div>
    );
  }

  return null;
};

export default GoogleCallback; 