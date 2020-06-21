import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import TodoPage from '../pages/TodoPage';
import NotFoundPage from '../pages/NotFoundPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/todo' component={TodoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
