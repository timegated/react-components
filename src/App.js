import React from 'react';
import Navigation from './layout/Navigation/Navigation';
import { SnackbarProvider } from 'notistack';
import { Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Tables from './pages/Tables/Tables';
import Buttons from './pages/Buttons/Buttons';

const App = () => {
  const notistackRef = React.createRef();
  const onClickDismiss = key => {
    notistackRef.current.closeSnackbar(key);
  };
 
  return (
    <div>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        action={(key) => (
          <Button variant="text" onClick={() => onClickDismiss(key)}>
            Dismiss
          </Button>
        )}
      >
        <Navigation />
        <Switch>
          <Route path="/buttons">
            <Buttons />
          </Route>
          <Route path="/tables">
            <Tables />
          </Route>
        </Switch>
        </SnackbarProvider>
    </div>
  )
};

export default App;