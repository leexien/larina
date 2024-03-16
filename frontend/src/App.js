import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Frontend Application</h1>
      <p>Data from backend: {data}</p>
    </div>
  );
}

export default App;

