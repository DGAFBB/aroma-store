import React, {useContext} from 'react';
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";
import {Context} from "../index";

const ProductListProduct = () => {
    const {product} = useContext(Context)
    return (
        <Row className="justify-content-md-center">
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
};

export default ProductListProduct;