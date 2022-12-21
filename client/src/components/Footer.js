import React from 'react';
import {observer} from "mobx-react-lite";
import logo from "../assets/logo.svg";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Footer = observer( () => {
    return (
        <Container>
        <Row className="">
          <form></form>
        </Row>
        <Row>
            <Col>

            </Col>
            <Col>
                <img
                src= {logo}
                alt="React Bootstrap logo"
                />
            </Col>
            <Col>

            </Col>
        </Row>
            <Row>
                <text> </text>
            </Row>
        </Container>
    );
});

export default Footer;