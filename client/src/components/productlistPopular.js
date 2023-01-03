import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Col, Row} from "react-bootstrap";
import ProductItemFavorite from "./productitemFavorite";
import ProductItem from "./ProductItem";
import {Context} from "../index";

const ProductListPopular = observer(() => {
    const {product} = useContext(Context)
    return (
            <Row className="justify-content-md-center">
                {product.products.map(product =>
                    <ProductItem key={product.id} product={product}/>
                )}
            </Row>
    );
});
export default ProductListPopular;