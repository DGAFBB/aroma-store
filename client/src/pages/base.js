import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import sec from "../assets/img2.png";
import thd from "../assets/img_3.png";
import frst from "../assets/img1.png";

const Base = observer(() => {

    return (
        <Container className="contr">
            <Row style={{width:"200%"}} className="float-md-center">
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
            <Row style={{color:"##5D4037"}}>

            </Row>
        </Container>
    );
});
export default Base;