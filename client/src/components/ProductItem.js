import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heart from '../assets/heart.svg';
import {Link, useNavigate} from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const path = `${product.id}.png`
    return (
        <Link to={PRODUCT_ROUTE} style={{ paddingBottom:"5%"}}>
            <card style={{width:"100%"}} className="justify-content-md-center flex-fill">
                <Col className="justify-content-md-center" style={{ width:"80%", cursor: 'pointer' }}>
                    <Row>
                        <Image width="98%" height="98%" src={process.env.REACT_APP_API_URL + path} style={{paddingTop:"2%", paddingLeft:"2%"}}/>
                        <div>
                            <img width="10%" height="10%" src={heart} alt={heart} style={{position:"absolute", top:"3%",  right:"8%"}}/>
                        </div>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Row className="heading5" style={{paddingTop:"20%"}}>{product.title}</Row>
                            <Row className="heading5_2" style={{paddingTop:"5%"}}> {product.description} </Row>
                            <Row className="heading5" style={{paddingTop:"10%"}}>{product.price}</Row>
                        </Col>
                    </Row>
                </Col>
            </card>
        </Link>
    )
};

export default ProductItem;