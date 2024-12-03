import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './utils/theme'; // Import ThemeProvider
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router> {/* Wrap App with Router here */}
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
