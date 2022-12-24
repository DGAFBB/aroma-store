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
        <Row
            className="parkItem"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
        >
            <Col>
            <Image width="100%" src={process.env.REACT_APP_API_URL + path} />
        </Col>
            <Col>
                <Row>{product.title}</Row>
                <Row> {product.description} </Row>
            </Col>

        </Row>
    )
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>...</div>
                    <div className="d-flex align-items-center">
                        <div>{product.rating}</div>
                        <Image width={18} height={18} src={heart}/>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;