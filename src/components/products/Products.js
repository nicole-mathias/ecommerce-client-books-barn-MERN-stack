import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductData from "./ProductData";
import { Link} from "react-router-dom";


function Products({search}) {

  const [post, setPost] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAk0_zjJvTWE60QXSXiXK2eqeMVJbP-0Kg&printType=books&filter=paid-ebooks`
      );
      console.log(request.data.items);
      setPost(request.data.items);
      return request;
    }
    fetchData();
  }, [search]);

  
  return(
    <div class = "card">

      {post.map((post) => (
        <div className= "card-arrangement" >
          <Link to={`/search/${post.id}`}>
          <ProductData 
              key = {post.id}
              id = {post.id}
              title = {post.volumeInfo.title}
              image = {post.volumeInfo.imageLinks.thumbnail}
              authors = {post.volumeInfo.authors}
              price = {post.saleInfo.saleability === "NOT_FOR_SALE" ? "Out of stock" : Math.floor(post.saleInfo.retailPrice.amount)}
              category = {post.volumeInfo.categories}
            />
            </Link>
            


        </div> 

      ))}



    </div>
  );
}

export default Products;