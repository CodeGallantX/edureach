import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { getGoogleUserInfo, authenticateWithGoogle } from '../../utils/api';

const GoogleAuthButton = () => {
  const navigate = useNavigate();
  
  const login = useGoogleLogin({
    flow: 'implicit',
    onSuccess: async (response) => {
      try {
        // Get user info using our utility function
        const userInfo = await getGoogleUserInfo(response.access_token);
        
        // Authenticate with our backend using our utility function
        const data = await authenticateWithGoogle(userInfo);
        
        if (data.success) {
          // Store the authentication token
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userData', JSON.stringify(data.userData));
          
          // Redirect to dashboard using React Router
          navigate('/student/dashboard');
        } else {
          console.error('Authentication failed:', data.message);
        }
      } catch (error) {
        console.error('Google authentication error:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    },
  });

  return (
    <button
      type="button"
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300"
    >
      <FcGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleAuthButton; 