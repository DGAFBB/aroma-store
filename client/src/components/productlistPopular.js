import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Row} from "react-bootstrap";
import ProductItemFavorite from "./productitemFavorite";

const ProductListPopular = observer(() => {

    return (
            <Row className="justify-content-md-center">
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
                <ProductItemFavorite/>
            </Row>
    );
});
export default ProductListPopular;