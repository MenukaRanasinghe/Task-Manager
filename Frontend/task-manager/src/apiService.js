
const BASE_URL = 'http://localhost:8081/api';

export const login = async (usernameOrEmail, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usernameOrEmail, password })
    });

    console.log('Response status:', response.status);

    if (response.status === 200) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        return responseData;
      } else {
        const responseData = await response.text();
        console.log('Response data:', responseData);
        return responseData;
      }
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Login failed');
  }
};


export const register = async (username, email, password, userType) => {
  try {
    const response = await fetch(`${BASE_URL}/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, userType })
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Registration failed');
    }
  } catch (error) {
    throw new Error('Registration failed');
  }
};
