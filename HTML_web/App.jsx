//src/App.jsx
function App() {
  return (
    <div>
      <h1>Welcome to ReactJS</h1>
      <p>This is my first React program.</p>
    </div>
  );
}

export default App;


//src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
