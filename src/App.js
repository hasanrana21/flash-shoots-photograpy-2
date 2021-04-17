import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./Components/AdminPage/Admin/Admin";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/PrivateLoginSystem/Login/Login";
import PlacedOrder from "./Components/PlacedOrderPage/PlacedOrder/PlacedOrder";
import PrivateRoute from "./Components/PrivateLoginSystem/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/"> 
              <Home></Home>
            </Route>
            <PrivateRoute path="/placedOrder/:price">
              <PlacedOrder></PlacedOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            

          </Switch>
          
          <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
