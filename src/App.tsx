import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import * as createHistory from 'history';
import home from './pages';
import apply from './components/applications/apply';
import 'bootstrap/dist/css/bootstrap.min.css';


interface AppProps { }
export const history = createHistory.createBrowserHistory();

class App extends Component<AppProps> {

  render() {

    return (
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path='/apply/:id' component={apply} />
            <Route path='/' component={home} />
            <Route path='*' component={home} />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}


export default App;
