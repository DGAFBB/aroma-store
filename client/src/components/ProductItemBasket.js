import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {PRODUCT_ROUTE} from "../utils/consts";
import Image from "react-bootstrap/Image";
import heart from "../assets/heart.svg";
import product1 from "../assets/product1.png";
import heart_active from "../assets/heart_active.svg";
import minus from "../assets/counter_minus.svg";
import plus from "../assets/counter_plus.svg"

const ProductItemBasket = ({product}) => {
    const navigate = useNavigate();
    const path = `${product.id}.png`
    return (
            <card style={{width:"100%", paddingBottom:"5%"}} className="justify-content-md-center flex-fill">
                <Row
                    className="justify-content-md-center"
                    style={{ width:"100%", cursor: 'pointer' }}
                >
                    <Col md={3}>
                        <div style={{width:"100%"}} className="card_style align-items-center">
                            <Link to={PRODUCT_ROUTE}>
                                <Image width="98%" height="98%" src={process.env.REACT_APP_API_URL + path} style={{paddingTop:"2%", paddingLeft:"2%", paddingBottom:"2%"}}/>
                            </Link>
                        </div>
                    </Col>
                        <Col md={5}>
                            <Link to={PRODUCT_ROUTE}>
                            <Row className="reg-head" style={{paddingLeft:"15%"}}>{product.title}</Row>
                            </Link>
                            <Row className="heading5_2" style={{paddingTop:"5%" , paddingLeft:"15%"}}>{product.description}</Row>
                        </Col>

                    <Col md={2}>
                        <Row>
                            <Col md={2}>
                                <button style={{background:"transparent"}}>
                                    <img src={minus} alt={minus}/>
                                </button>
                            </Col>
                            <Col md={2}>

                            </Col>
                            <Col md={2}>
                                <button style={{background:"transparent"}}>
                                    <img src={plus} alt={plus}/>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                        <Col md={2}>
                            <Row className="reg-head">{product.price}</Row>
                        </Col>
                </Row>
            </card>

    );
};

export default ProductItemBasket;