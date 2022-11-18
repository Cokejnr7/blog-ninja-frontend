import Navbar from './Navbar';
import Home from './home';
import Login from './login';
import PrivateRoute from './ProtectedRoute';
import BlogDetail from './blogdetail';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import NotFound from './notfound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
          <PrivateRoute component={Home} path="/" exact/>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
           <PrivateRoute component={Create} path="/create" exact/>
            <Route path="/blogs/:id" component={BlogDetail} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
