
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';
import Admin from './Admin';

function App() {

  return (
    <Router> 
      <div className="App">
        <Link className="admin-link"to='/Admin'>Admin Page</Link>
        <Switch>
          <Route exact path="/Admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
       
      
      </div>
      
    </Router>
  );
}

export default App;
