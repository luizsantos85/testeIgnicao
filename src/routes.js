import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';


export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
    </Switch>
  );
};
