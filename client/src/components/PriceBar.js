import React from 'react';
import {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Row} from "react-bootstrap";

const PriceBar = observer( () => {
    const {product} = useContext(Context)
    return (
        <Col className="justify-content-md-center" style={{paddingBottom:"15%"}}>
        <Row className="reg-head justify-content-md-center" style={{paddingBottom:"5%"}}>
            Цена
        </Row>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <input className="log-form4" type="text" placeholder="От" style={{marginTop:"6%", paddingBottom:"4%", paddingTop:"4%"}}></input>
                </Col>
                <Col md={1} className="justify-content-md-center">
                    <text className="heading3 justify-content-md-center" style={{verticalAlign:"bottom", textAlign:"center", marginTop:"6%", paddingBottom:"4%", paddingTop:"4%"}}> - </text>
                </Col>
                <Col md={3}>
                        <input className="log-form4" type="text" placeholder="До" style={{marginTop:"6%", paddingBottom:"4%", paddingTop:"4%"}}></input>
                </Col>
            </Row>
        </Col>
    );
});
export default PriceBar;
