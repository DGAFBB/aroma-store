import React from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import product1 from "../assets/product1.png"
import {Link, useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";

const OrderItem = ({order, product}) => {
    const navigate = useNavigate();
    const rating = require('react-rating');
    const path = `${product.id}.png`
    return (
        <Row style={{ width:"100%"}}>
            <Row>
                <text className="reg-head"><p style={{paddingTop:"25%"}}>№ {order.id} на {order.sum} ₽</p>
                    <p>{order.status} {order.datetime}</p>
                </text>
            </Row>
            <Row style={{width:"85%", paddingTop:"5%", paddingLeft:0, paddingRight:"auto"}} className="justify-content-around">
                {product.products.map(product =>
                        <div style={{width:"25%", marginBottom:"5%", marginRight:"5%"}} className="card_style justify-content-between">
                            <Link to={PRODUCT_ROUTE}>
                                <Image width="98%" height="98%" src={process.env.REACT_APP_API_URL + path} style={{paddingTop:"2%", paddingLeft:"2%"}}/>
                            </Link>
                        </div>
                    )}
            </Row>
        </Row>
    );
};

export default OrderItem;