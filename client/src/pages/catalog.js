import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {fetchAromas, fetchProducts, fetchTypes} from "../http/productAPI";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import Pages from "../components/Pages";
import {Container} from "react-bootstrap";
import ProductList from "../components/ProductList";

const Catalog = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AromaBar/>
                    <ProductList />
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
};

export default Catalog;