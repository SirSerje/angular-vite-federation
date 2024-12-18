import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 const renderApp = (container: HTMLElement) => {
  console.log("renderApp",container);
  const root = ReactDOM.createRoot(container || document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
// renderApp(document.getElementById('root') as HTMLElement);
export { renderApp };