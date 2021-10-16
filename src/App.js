import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Checkout from './pages/Checkout/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFount/NotFound';
import Signup from './pages/Signup/Signup/Signup';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
