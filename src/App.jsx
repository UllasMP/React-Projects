import React, { useState } from 'react';
import Post from './Post';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 const client = new QueryClient();
 
function App() {
  const [showImages, setShowImages] = useState(true);
 

  return (
    <QueryClientProvider client={client}>
      <>
        <button onClick={() => setShowImages((prev) => !prev)}>
          {showImages ? "Hide " : "Show "} Images
        </button>

        {showImages && <Post />}
      </>
    </QueryClientProvider>
  );
}

export default App;
