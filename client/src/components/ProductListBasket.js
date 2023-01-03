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
        <Row className="justify-content-md-center">
            {product.products.map(product =>
            <ProductItemBasket key={product.id} product={product}/>
        )}
        </Row>
    );
});

export default ProductListBasket;