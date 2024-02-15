import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import LoadingPage from './components/LoadingPage'


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
