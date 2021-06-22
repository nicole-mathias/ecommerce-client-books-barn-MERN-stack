import React from "react";
import {Card, Image, Icon} from "semantic-ui-react";
import axios from "axios";


function CartData({title, image, price, id, OnProductClick}) {


    return(
        <div>

            <Card>
                <Image className = "card-image" src={image} wrapped ui={false} />

                <Card.Content style = {{display: "block"}}>
                    <Card.Header>{title}</Card.Header>
                    <p></p>
                    <Card.Description><Icon fitted name='rupee sign' /> <b>{price}</b></Card.Description>

                    <button className = "delete-button" onClick = {() => OnProductClick(id)}>Remove from cart</button>
                </Card.Content>
             </Card>

        </div>
    );
}

export default CartData;