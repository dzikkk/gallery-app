import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AlbumScene } from './albums/scene/AlbumScene';
import { history } from './store/rootStore';
import { appTheme } from './layout/theme/appTheme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/"><AlbumScene /></Route>
            <Route render={() => (<div>TEST</div>)} />
          </Switch>
        </ConnectedRouter >
      </Router>
    </ThemeProvider>
  );
}

export default App;
