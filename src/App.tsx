import React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { AlbumScene } from './albums/scene/AlbumScene';
import { appTheme } from './layout/theme/appTheme';
import { ThemeProvider } from 'styled-components';
import { history } from './store/history';
import { GalleryScene } from './gallery/scene/GalleryScene';
import { GlobalStyle } from './layout/globalStyles/globalStyles';
import { UserProfileScene } from './usersProfile/scene/UserProfileScene';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/"><AlbumScene /></Route>
            <Route path="/album/:albumId/:userId"><GalleryScene /></Route>
            <Route path="/users/:userId"><UserProfileScene /></Route>
          </Switch>
      </ConnectedRouter >
    </ThemeProvider>
  );
}

export default App;
