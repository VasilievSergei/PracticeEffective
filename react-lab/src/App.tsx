import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import router from 'routes';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3b13f'
    }
  }
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
