import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./home.css"
import BestSellerData from "./BestSellerData";
import NewRelease from "./NewRelease";
import ProductData from "../products/ProductData";
import "../products/card.css";
import header from "../../images/header.jpg";
import { Icon } from 'semantic-ui-react'


function Home() {
    return(
        <div>
            
            <Navbar/>
            navbar

            <div className = "card home">

                <div className = "home-title">
                <Icon name='book'/> Best Seller Books
                </div>

                <div>
                    {
                        BestSellerData.map((bestSeller) => (
                            <div className= "card-arrangement" key = {bestSeller.id}>
                                <ProductData
                                    image = {bestSeller.image}
                                    title = {bestSeller.title}
                                    price = {bestSeller.price}
                                    authors = {bestSeller.authors}
                                    category = {bestSeller.category}/>
                                
                            </div>

                        ))
                    }
                </div>


                <div className = "home-title"><Icon name='newspaper'/> New Releases
                </div>


                <div>
                    {
                        NewRelease.map((bestSeller) => (
                            <div className= "card-arrangement" key = {bestSeller.id}>
                                <ProductData
                                    image = {bestSeller.image}
                                    title = {bestSeller.title}
                                    price = {bestSeller.price}
                                    authors = {bestSeller.authors}
                                    category = {bestSeller.category}/>
                                
                            </div>

                        ))
                    }
                </div>


            </div>

            
            <Footer/>

        </div>
    );
}

export default Home;