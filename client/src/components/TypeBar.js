import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import {Col, Row} from "react-bootstrap";

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row style={{backgroundColor:"#5D4037"}} className="justify-content-around">
            <Col>
            {product.types.map(type =>
                <Col.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === product.selectedType.id}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                   <text className="heading2">{type.name}</text>
                </Col.Item>
            )}
            </Col>
        </Row>
    );
});

export default TypeBar;