import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./card.css"
import ProductData from "./ProductData";
import SingleProductDetails from "./SingleProductDetails";
import Navbar from "../navbar/Navbar";


function ProductSelected() {

    const history = useHistory();
    let id = history.location.pathname;
    id = id.slice(8);

    const min  = 1;
    const max = 6;

    const [post, setPost] = useState([]);


      useEffect(() => {
        async function fetchData() {
          const request = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyAk0_zjJvTWE60QXSXiXK2eqeMVJbP-0Kg&printType=books&filter=paid-ebooks&maxResults=1`
          );
          console.log(request.data.items);
          setPost(request.data.items);
          return request;
        }
        fetchData();
      }, [id]);


    return(
        <div>
          <Navbar/>

            <div className = "card-arrangement card-position">


                {post.map((post) => (
                    <div className= "page-arrangement">

                        <div className = "page-details">
                        <ProductData
                            key = {post.id}
                            id = {post.id}
                            image = {post.volumeInfo.imageLinks.thumbnail}
                            authors = {post.volumeInfo.authors}
                            price = {post.saleInfo.saleability === "NOT_FOR_SALE" ? "Out of stock" : Math.floor(post.saleInfo.retailPrice.amount)}
                            category = {post.volumeInfo.categories}
                            />
                        </div>


                        <div className = "page-details text-data">
                        <SingleProductDetails 
                                id = {post.id}
                                key = {post.id}
                                title = {post.volumeInfo.title}
                                image = {post.volumeInfo.imageLinks.thumbnail}
                                rating = {Math.floor(Math.random() * (max - min)) + min}
                                description = {post.searchInfo.textSnippet}
                                authors = {post.volumeInfo.authors}
                                price = {post.saleInfo.saleability === "NOT_FOR_SALE" ? "Out of stock" : Math.floor(post.saleInfo.retailPrice.amount)}
                                category = {post.volumeInfo.categories}
                            />
                        </div>
   
                    </div> 

                ))}

            </div>
          
        </div>
    );
}



export default ProductSelected;