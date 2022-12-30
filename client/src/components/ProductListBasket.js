import React, {useContext} from 'react';
import ProductItemBasket from "./ProductItemBasket";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";
import ProductItemFavorite from "./productitemFavorite";

const ProductListBasket = observer(() => {

    const {product} = useContext(Context)

    return (
        // <Row className="d-flex">
        //     {product.products.map(product =>
        //         <ProductItemBasket key={product.id} product={product}/>
        //     )}
        // </Row>
        <Row className="justify-content-md-center">
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
            <ProductItemBasket/>
        </Row>
    );
});

export default ProductListBasket;