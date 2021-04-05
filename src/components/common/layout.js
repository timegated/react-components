import React from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
