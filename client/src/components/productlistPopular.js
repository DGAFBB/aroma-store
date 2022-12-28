import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Row} from "react-bootstrap";
import ProductItemFavorite from "./productitemFavorite";

const ProductListPopular = observer(() => {

    return (
        <Col>
            <Row className="justify-content-md-center">
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
            </Row>
            <Row className="justify-content-md-center">
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
            </Row>
        </Col>
    );
});
export default ProductListPopular;