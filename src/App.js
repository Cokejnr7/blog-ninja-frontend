import Navbar from './components/Navbar';
import Home from './screens/home';
import Login from './screens/login';
import PrivateRoute from './components/ProtectedRoute';
import BlogDetail from './screens/blogdetail';
import './index.css'
import { Router, Route, Switch } from 'react-router-dom';
import Create from './screens/create';
import NotFound from './screens/notfound';
import history from './history';
import Register from './screens/register';

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
          <PrivateRoute component={Home} path="/" exact/>
           <PrivateRoute component={Create} path="/create" exact/>
            <PrivateRoute path="/blogs/:id" component={BlogDetail} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
