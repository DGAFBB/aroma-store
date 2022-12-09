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
            <Row style={{width:"100%"}}>
                <Col md="auto">
                    <img
                    src= {frst}
                    alt={frst}
                    class="float-left"
                    />
                </Col>
                <Col md="auto">
                    <img
                        src= {sec}
                        alt={sec}

                    />
                </Col>
                <Col>
                    <img
                    src= {thd}
                    alt={thd}
                    />
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    );
});
export default Base;