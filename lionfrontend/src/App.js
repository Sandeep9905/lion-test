import React, { useEffect, useState } from 'react';
import ProductList from './ListProduts';
import EditUser from './EditUser';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import { authUser } from './Authentication/auth';
import Signup from './Signup';

function App() {
  const [isAuthenticated, setIsauthenticated] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem('jwtToken');
    if (token) {
      setIsauthenticated(false)
    }
  })


  const auth = (data) => {
    authUser(data)
      .then(res => {
        setIsauthenticated(false);
      }).catch(err => {
        console.log(err);
      })
  }
  const logout = () => {
    localStorage.clear();
    setIsauthenticated(true);
  }
  return (
    <>
      <div>
        <Switch>
          {isAuthenticated ? <Route exact path='/' render={props => <Login auth={auth} />} /> :
            <Route exact path='/' render={props => <ProductList logout={logout} {...props} />} />
          }
          <Route exact path='/profile' render={props => <EditUser {...props} />} />
          <Route exact path="/signup" render={props => <Signup />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
