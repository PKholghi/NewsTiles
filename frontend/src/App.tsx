import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/homepage';
import Preferences from './components/PreferencesPage/preferences';
import ArticlePage from './components/ArticlePage/articlepage';
import RegisterModal from './components/Homepage/RegisterModal/registermodal';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/pref' component={Preferences} />
        <Route path='/articles' component={ArticlePage} />
        <Route path='/register' component={RegisterModal} />
      </Switch>
    </main>
  );
}

export default App;
