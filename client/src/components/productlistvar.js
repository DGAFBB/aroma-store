import React from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import ProductItemVar from "./productitemvar";

const ProductListVar = observer(() => {

    return (
        <Row className="d-flex">
            <ProductItemVar />
            <ProductItemVar />
            <ProductItemVar />
            <ProductItemVar />
        </Row>

    );
});
export default ProductListVar;