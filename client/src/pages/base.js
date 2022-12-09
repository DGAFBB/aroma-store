import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import sec from "../assets/img2.png";
import thd from "../assets/img_3.png";
import frst from "../assets/img1.png";
import "../styles/Container/container.css";

const Base = observer(() => {

    return (
        <Container fluid>
            <Row className="justify-content-md-center row-cont2">
                <Col md="auto">
                    <img
                    src= {frst}
                    alt={frst}
                    />
                </Col>
                <Col md="auto">
                    <img
                        src= {sec}
                        alt={sec}
                    />
                </Col>
                <Col md="auto">
                    <img
                    src= {thd}
                    alt={thd}
                    />
                </Col>
            </Row>
            <Row style={{backgroundColor:"#5D4037"}} className="justify-content-md-center row-cont">
                <Col md="auto" className="header-base">
                О нас
                </Col>
            </Row>
        </Container>
    );
});
export default Base;