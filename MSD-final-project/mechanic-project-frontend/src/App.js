import React, { useState,useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./navbar/navbar";
import Home from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./footer/footer";
import RequestApp from "./requestAppoint/requestAppointment";
import { UserContext } from "./utils/context";
import Success from './requestAppoint/success';
import Login from './employeePage/login';
import SearchCustomer from './employeePage/mainSearchPage';


function App() {
  const user = useContext(UserContext);
  return (
    <>
      <Router>
        <div>
          {user.state.homePage === 'home' && (
            <>
              <NavBar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Services" component={Services} />
                <Route path="/Products" component={About} />
                <Route path="/Success" component={Success} />
              </Switch>
              <Footer />
            </>
          )}
          {user.state.homePage === 'appointment' && <Route path="/request-appointment" component={RequestApp} />}
          {user.state.homePage === 'login' && (!user.state.token?<Route path="/login-employee" component={Login} /> : <Route to="/search-customer" component={SearchCustomer} />)}
        </div>
      </Router>
    </>
  );
}

export default App;
