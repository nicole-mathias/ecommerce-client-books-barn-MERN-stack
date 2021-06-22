import React, { useState} from "react";
import Products from "../products/Products";
import Navbar from "../navbar/Navbar";
import "./searchBar.css";
import {Icon} from "semantic-ui-react";
// import Footer from "../footer/Footer";


function SearchBar() {

  const [search, setSearch] = useState("");
  const [searchFromButton, setSearchFromButton] = useState("");


  return (
    <div>


      <Navbar/>
      navbar

      <div className = "searchBar">

        <input className = "input-area" placeholder='Search...'  onChange={(event) => setSearch(event.target.value)}/>

        <button className = "button-input" onClick={() => setSearchFromButton(search)}><Icon size='small' name='search' /></button>
      </div>
      
      <Products search = {searchFromButton}/>

      {/* <Footer/> */}

    </div>
  );
}
export default SearchBar;
