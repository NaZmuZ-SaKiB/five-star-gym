import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from "@firebase/auth";

import { Context } from "./Components/ContextProvider/ContextProvider";
import Authentications from "./Components/Authentications/Authentications";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from './Components/Nav/Nav';
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Service from "./Components/Service/Service";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Appoinment from "./Components/Appoinment/Appoinment";
import Enroll from "./Components/Enroll/Enroll";
import Trainer from "./Components/Trainers/Trainer";

const App = () => {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        setContext({
          ...context,
          user: user
        })
      }
      else {
        setContext({
          ...context,
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <PrivateRoute exact path='/service/:id'>
          <Service />
        </PrivateRoute>
        <PrivateRoute exact path='/appoinment'>
          <Appoinment />
        </PrivateRoute>
        <PrivateRoute exact path='/enroll'>
          <Enroll />
        </PrivateRoute>
        <Route exact path='/trainers' component={Trainer} />
        <Route exact path='/login' component={Authentications} />
        <Route exact path='/signup' component={Authentications} />
        <Route exact path='/*' component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
