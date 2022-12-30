import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heart from '../assets/heart.svg';
import {Link, useNavigate} from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';
import product1 from "../assets/product1.png"
import auth from "../pages/auth";
import "../styles/cards/card.css"
import heart_active from "../assets/heart_active.svg"

const ProductItemFavorite = ({product}) => {
    // const navigate = useNavigate();
    // const rating = require('react-rating');
    // const path = `${product.id}.png`
    //     function chg(id){
    //     if (document.getElementById(id).src.indexOf("heart.svg")>0){
    //     document.getElementById(id).src="heart_active.svg"
    //     }
    //     else{
    //     document.getElementById(id).src="heart.svg"
    //     }
    //     }

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
                                <img width="10%" height="10%" src={heart_active} alt={heart_active} style={{position:"absolute", top:"3%",  right:"8%"}}/>
                            </div>
                        </div>
                    </Row>
                    <Row style={{width:"100%"}}>
                        <Col style={{width:"100%"}}>
                            <Row className="heading5" style={{paddingTop:"20%"}}>Yfbvtyjdfybt</Row>
                            <Row className="heading5_2" style={{paddingTop:"5%"}}> Jgbcfybt njdfhf </Row>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"20%"}} >
                    <div style={{width:"100%"}} className="align-items-center">
                        <button style={{width:"100%"}} className="transparent-button">Добавить в корзину</button>
                    </div>
                    </Row>
                </Col>
            </card>
        </Link>
    );
};

export default ProductItemFavorite;