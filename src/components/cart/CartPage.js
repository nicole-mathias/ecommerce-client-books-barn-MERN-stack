import React, {useEffect, useState} from "react";
import axios from "axios";
import CartData from "./CartData";
import Navbar from "../navbar/Navbar";
import { Message } from 'semantic-ui-react'
import Footer from "../footer/Footer";
import { Icon } from 'semantic-ui-react'
import "./cartPage.css";
import "../products/card.css";

// -----------------------------------------
// const loadScript = (src) => {
//     return new Promise((resolve) => {
//         const script = document.createElement('script')
//         // script.src = 'https://checkout.razorpay.com/v1/checkout.js'
//         script.src =
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(true)
//         }
//         script.onerror = () => {
//             resolve(false)
//         }
        
//     })

// }
// -----------------------------------------------

function CartPage() {

    const [productList, setProductList] = useState([]);

    // for reading data
    useEffect(() => {
        axios
        .get('http://localhost:3001/read')
        .then((response) => {
            setProductList(response.data)
        })
    }, [productList]);


    const deleteProduct = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`);
    }

// ---------------------------------------------------------------------------
    // async function displayRazorpay() {

    //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    //     if(!res) {
    //         alert('Razorpay SDK failed to load. Are you online?');
    //         return
    //     }


    //     const options = {
    //         "key": "rzp_test_pAZBlWZd6ETe1g", 
    //         "amount": "500", 
    //         "currency": "INR",
    //         "name": "Books Barn",
    //         "description": "Test Transaction",
    //         "image": "https://example.com/your_logo",
    //         "order_id": "order_HPwIJGSVuAjnwX", 

    //         "handler": function (response){
    //             alert(response.razorpay_payment_id);
    //             alert(response.razorpay_order_id);
    //             alert(response.razorpay_signature)
    //         },
    //         "prefill": {
    //             "name": "Gaurav Kumar",
    //             "email": "gaurav.kumar@example.com",
    //             "contact": "9999999999"
    //         }
    //     };
    //     const paymentObject = new window.Razorpay(options);
        
    // }

    // ----------------------------------------------------------------------


    // const loadRazorpay = () => {
    //     const script = document.createElement('script')
    //     script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    //     document.body.appendChild(script)
    //     script.onload = displayRazorpay
    // }

    return(
        <div>
            <Navbar/>
            navbar
            <div className = "cart-page card">

//             <button onClick = {loadRazorpay}>Payment</button>
                
                <div className = "cart-title">
                <Icon name='cart'/> Welcome to Cart
                </div>


                

                {
                    productList.map((products) =>(
                        <div key = {products._id} className= "card-arrangement">
                            <CartData
                                id = {products._id}
                                title = {products.title}
                                image = {products.image}
                                price = {products.price}
                                OnProductClick = {(id) => deleteProduct(products._id)}
                                />
                        </div>
                    ))
                }

            </div>

            <Footer/>

        </div>
    );
}

export default CartPage;
