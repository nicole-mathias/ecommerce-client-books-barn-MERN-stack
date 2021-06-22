import React from "react";
import {Icon, Rating } from "semantic-ui-react";
import "./card.css";
import axios from 'axios';


function SingleProductDetails({title, rating, description, price, authors, id, category, image}) {
    


    // for posting data
    const addToList = () => {
        axios.post('http://localhost:3001/insert', 
        {
            productId: id, 
            price: price, 
            image: image, 
            title: title, 
        })
    };


    return(
        <div className = "product-information">

            <div className = "title">{title}</div>

            <Rating className = "rating" icon = "star" size='huge' defaultRating = {rating} maxRating={5}/>

            <div className = "description">{description}</div>

            <div className = "category">Category: {category}</div>

            <div className = "authors">Authors: {authors + " "}</div>


            <div className = "price"><Icon fitted name='rupee sign' /> {price}</div>

            <button className = "addToCart" onClick = {addToList}>Add to cart<Icon className = "symbol cart" name='cart'/></button>
        </div>
    );
}

export default SingleProductDetails;