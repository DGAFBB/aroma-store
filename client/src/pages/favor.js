import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Guest_NavBar from "../components/Guest_NavBar";
import ProductListPopular from "../components/productlistPopular";
import ProductListFavorit from "../components/ProductListFavorit";

const Favor = () => {
    return (
        <Container>
            <Row>
            <Col md={3} className="justify-content-md-center">
                <Guest_NavBar></Guest_NavBar>
            </Col>
            <Col>
                <ProductListFavorit/>
            </Col>
            </Row>
        </Container>
    );
};

export default Favor;