import React from 'react';
import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAromas, fetchProduct, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import {createAroma} from "../http/productAPI";

const Mainpage = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchAromas().then(data => product.setAromas(data))
        fetchProduct(null, null, 1, 2).then(data => {
            product.setProduct(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProduct(product.selectedType.id, product.selectedAroma.id, product.page, 2).then(data => {
            product.setProduct(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedAroma,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AromaBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
export default Mainpage;