import React, { useContext } from 'react';
import { GlobalStyles } from './utils/theme';
import { useSelector } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeContext from './utils/theme';
import { Navigate } from 'react-router-dom';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  console.log('isAuthenticated:', isAuthenticated); // Debugging line

  // Ensure the check for false, not undefined
  if (isAuthenticated === false || isAuthenticated === undefined) {
    return <Navigate to="/admin/login" />;
  }
  

  return (
    <>
      <GlobalStyles />
      <div className={theme}>
        <Header toggleTheme={toggleTheme} />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
};

export default App;
