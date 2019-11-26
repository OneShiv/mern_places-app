import React from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlace';
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Authentication from "./users/pages/AuthenticationPage";

const App = ()  => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/places/:placeid" exact>
          <UpdatePlace />
        </Route>
        <Route to="/auth" exact>
          <Authentication />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  )
}

export default App;
