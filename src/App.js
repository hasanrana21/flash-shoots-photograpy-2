import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from "./Components/HomePage/Footer/Footer";
import Header from "./Components/HomePage/Header/Header";
import Home from "./Components/HomePage/Home/Home";
import Order from "./Components/HomePage/Order/Order";
import Login from "./Components/PrivateLoginSystem/Login/Login";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <h3>{loggedInUser.email}</h3>
          <Header></Header>
          <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          
          <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
