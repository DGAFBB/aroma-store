import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import {Col, Row} from "react-bootstrap";

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row style={{backgroundColor:"#5D4037", paddingTop:"2%", paddingBottom:"2%"}} className="justify-content-md-center">
            <Row style={{width:"50%", left:"25%"}} className="justify-content-center row-border">
                <Col style={{left:"5%"}}>
                    <text className="heading2" >ghnbbcvdfyh</text>
                </Col>
                <Col >
                    <text className="heading2">ghnbbcvdfyh</text>
                </Col>
                <Col >
                    <text className="heading2">ghnbbcvdfyh</text>
                </Col>
                <Col >
                    <text className="heading2">ghnbbcvdfyh</text>
                </Col>
                {/*{product.types.map(type =>*/}
                {/*    <Col.Item*/}
                {/*        style={{cursor: 'pointer'}}*/}
                {/*        active={type.id === product.selectedType.id}*/}
                {/*        onClick={() => product.setSelectedType(type)}*/}
                {/*        key={type.id}*/}
                {/*    >*/}
                {/*       <text className="heading2">{type.name}</text>*/}
                {/*    </Col.Item>*/}
                {/*)}*/}
            </Row>
        </Row>
    );
});

export default TypeBar;