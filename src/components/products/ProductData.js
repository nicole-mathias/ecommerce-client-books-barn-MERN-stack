import React from "react";

import {Card, Image, Icon} from "semantic-ui-react";
import "./card.css";

function ProductData({ id, title, image, authors, price, category}) {
  return (

    <div>

        <Card className = "container">

            <Image className = "card-image" src={image} wrapped ui={false} />
              <Card.Content style = {{display: "block"}}>

                  <Card.Header>{title}</Card.Header>


                  <Card.Meta>{authors + " "}</Card.Meta>


                  <Card.Description><Icon fitted name='rupee sign' /> <b>{price}</b></Card.Description>

                  <div>{category}</div>

              </Card.Content>

        </Card>

    </div>
 
  );
}

export default ProductData;
