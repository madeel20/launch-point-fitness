import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import { auth } from './firebase';
import { store } from "./store";
import { Provider } from 'react-redux'
import Layout from './layout/index'
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(false);
      }
    });
  }, []);
  if (user === null) { return null }
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              {!user ? <Route path="/" component={Layout} /> :
                <>
                  <Route path="/" exact component={LoginPage} />
                  <Route path="/sign-up" component={SignUp} />
                </>
              }
            </Switch>
          </Router>
        </Provider>
    </div>
  );
}
export default App;
