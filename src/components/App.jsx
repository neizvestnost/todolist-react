import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import TodoPage from '../pages/TodoPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/todo' component={TodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
