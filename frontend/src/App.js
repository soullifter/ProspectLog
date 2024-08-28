import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/welcome');
        setWelcomeMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching the welcome message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{welcomeMessage}</h1>
    </div>
  );
}

export default App;
