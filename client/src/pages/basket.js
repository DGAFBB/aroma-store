import React from 'react';
import {Container, Row} from "react-bootstrap";
import "../styles/fonts/fonts.css"
import "../styles/Buttons/button.css"
import {Link} from "react-router-dom";
import {DELIVERY_ROUTE} from "../utils/consts";
import ProductListBasket from "../components/ProductListBasket";

const Basket = () => {
    return (
        <Container>
            <Row>
                <text style={{marginTop:"4%", marginBottom:"7%", marginRight:"auto", marginLeft:0}} className="reg-head">Оформление заказа</text>
            </Row>
            <Row>
                <ProductListBasket/>
            </Row>
            <Row>
                <Link to={DELIVERY_ROUTE} style={{marginTop:"5%", marginBottom:"7%", marginRight:0, marginLeft:"auto"}}>
                <button style={{width:"160%", height:"140%", marginRight:0, marginLeft:"auto"}} className="brown-button">Оформить заказ</button>
                </Link>
            </Row>
        </Container>
    );
};

export default Basket;