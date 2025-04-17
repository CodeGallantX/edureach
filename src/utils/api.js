/**
 * Utility function to make API requests with proper CORS handling
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Promise} - Fetch response
 */
export const fetchWithCORS = async (url, options = {}) => {
  // Default headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Merge default headers with provided headers
  const headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  // Default fetch options
  const fetchOptions = {
    ...options,
    headers,
    credentials: 'include', // Include cookies in the request
  };

  try {
    const response = await fetch(url, fetchOptions);
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * Utility function to handle Google OAuth
 * @param {string} accessToken - Google access token
 * @returns {Promise} - User info
 */
export const getGoogleUserInfo = async (accessToken) => {
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get user info');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to get Google user info:', error);
    throw error;
  }
};

/**
 * Utility function to authenticate with Google
 * @param {Object} userInfo - Google user info
 * @returns {Promise} - Authentication response
 */
export const authenticateWithGoogle = async (userInfo) => {
  try {
    const response = await fetchWithCORS('https://e-sdg.onrender.com/auth/google/callback', {
      method: 'POST',
      body: JSON.stringify({
        googleId: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to authenticate with backend');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Google authentication failed:', error);
    throw error;
  }
}; 