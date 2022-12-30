import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ProductItemFavorite from "./productitemFavorite";

const ProductListFavorit = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row className="justify-content-md-center">
            {product.products.map(product =>
                <ProductItemFavorite key={product.id} product={product}/>
            )}
        </Row>
    );
});

export default ProductListFavorit;