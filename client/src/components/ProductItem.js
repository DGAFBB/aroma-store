import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heart from '../assets/heart.svg';
import { useNavigate } from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const rating = require('react-rating');
    const path = `${product.id}.png`
    return (
        <card>
        <Row md={3} className={"mt-3"}
            className="productItem"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
        >
            <Col>
            <Image width="100%" src={process.env.REACT_APP_API_URL + path} />
        </Col>
            <Col>
                <div className="d-flex align-items-center">
                <Image width={18} height={18} src={heart}/>
                </div>
                <Row>{product.title}</Row>
                <Row> {product.description} </Row>
            </Col>
        </Row>
        </card>
    )
};

export default ProductItem;