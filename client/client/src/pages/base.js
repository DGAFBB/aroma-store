import React from 'react';
import {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAromas, fetchProducts, fetchTypes} from "../http/productAPI";
import Pages from "../components/Pages";
import NavBar from "../components/NavBar";

const Base = observer(() => {

    return (
        <Container>

            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AromaBar/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
export default Base;