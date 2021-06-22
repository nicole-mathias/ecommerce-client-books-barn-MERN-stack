import "./App.css";
import React from "react";
import SearchBar from "./components/search/SearchBar";
import CartPage from "./components/cart/CartPage";
import ProductSelected from "./components/products/ProductSelected";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
// import Products from "./components/products/Products";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {  
  return (
    <div>
      
      <Router> 
        {/* <Navbar/> */}

      
         <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path="/search" component = {SearchBar} />
            <Route exact path = "/search/:id" component = {ProductSelected}/>
            <Route exact path = "/cart" component = {CartPage}/>
        </Switch>
      </Router>


    </div>
  );
}

export default App;