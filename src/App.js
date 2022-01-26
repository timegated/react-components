import React from 'react';
import Navigation from './layout/Navigation/Navigation';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Tables from './pages/Tables/Tables';
import Buttons from './pages/Buttons/Buttons';
import Editable from './pages/Editable/Editable';
import Expenses from './pages/Expenses/Expenses';
import Composable from './pages/Composable/Composable';
import Tooltips from './pages/Tooltips/Tooltips';

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
        <RecoilRoot>
          <Navigation />
          <Switch>
            <Route path="/buttons">
              <Buttons />
            </Route>
            <Route path="/tables">
              <Tables />
            </Route>
            <Route path="/editable">
              <Editable />
            </Route>
            <Route path="/expenses">
              <Expenses />
            </Route>
            <Route path="/composable">
              <Composable />
            </Route>
            <Route path="/composable">
              <Tooltips />
            </Route>
          </Switch>
          </RecoilRoot>
      </SnackbarProvider>
    </div>
  )
};

export default App;