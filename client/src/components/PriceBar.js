import React from 'react';
import {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
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
                    <input className="log-form2" type="text" placeholder="От" style={{marginTop:"6%"}}></input>
                </Col>
                <Col md={2} className="justify-content-md-center">
                    <text className="heading3 justify-content-md-center" style={{verticalAlign:"bottom", textAlign:"center"}}> - </text>
                </Col>
                <Col md={3}>
                    <input className="log-form2" type="text" placeholder="До" style={{marginTop:"6%"}}></input>
                </Col>
            </Row>
        </Col>
            // {product.prices.map((price) =>
            //     <ListGroup.Item
            //         style={{cursor: 'pointer'}}
            //         active={price.id === product.selectedPrice.id}
            //         onClick={() => product.setSelectedPrice(price)}
            //         key={price.id}
            //     >
            //         {price.name}
            //     </ListGroup.Item>
            // )}
    );
});
export default PriceBar;
