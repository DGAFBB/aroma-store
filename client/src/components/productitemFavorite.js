import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heart from '../assets/heart.svg';
import {Link, useNavigate} from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';
import product1 from "../assets/product1.png"
import auth from "../pages/auth";
import "../styles/cards/card.css"

const ProductItemFavorite = ({product}) => {
    // const navigate = useNavigate();
    // const rating = require('react-rating');
    // const path = `${product.id}.png`
    return (
        <Link to={PRODUCT_ROUTE} style={{ paddingBottom:"5%"}}>
            <card style={{width:"100%"}} className="justify-content-md-center flex-fill">
                <Col
                    className="justify-content-md-center"
                     style={{ width:"80%", cursor: 'pointer' }}
                >
                    <Row>
                        <div style={{width:"100%"}} className="card_style align-items-center">
                            <Image width="98%" height="98%" src={product1} style={{paddingTop:"2%", paddingLeft:"2%"}}/>
                            <div>
                                <img width="10%" height="10%" src={heart} alt={heart} style={{position:"absolute", top:"3%",  right:"8%"}}/>
                            </div>
                        </div>
                    </Row>
                    <Row >
                        <Col md={9}>
                            <Row className="heading5" style={{paddingTop:"20%"}}>Yfbvtyjdfybt</Row>
                            <Row className="heading5_2" style={{paddingTop:"5%"}}> Jgbcfybt njdfhf </Row>
                            <Row className="heading5" style={{paddingTop:"10%"}}>1800 ₽</Row>
                        </Col>
                    </Row>
                </Col>
            </card>
        </Link>
    );
};

export default ProductItemFavorite;