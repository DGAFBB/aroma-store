import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heart from '../assets/heart.svg';
import { useNavigate } from 'react-router-dom';
import {PRODUCT_ROUTE} from '../utils/consts';
import product1 from "../assets/product.png"

const ProductItemVar = ({product}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE)}>
            <Card style={{width: "20%", cursor: 'pointer'}} border={"light"}>
                <img width={150} height={150} src={product1} alt={product1}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>...</div>
                    <div className="d-flex align-items-center">
                        <Image width={18} height={18} src={heart}/>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItemVar;