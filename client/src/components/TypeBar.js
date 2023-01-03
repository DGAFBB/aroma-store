import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import {Col, Row} from "react-bootstrap";

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row style={{backgroundColor:"#5D4037", paddingTop:"2%", paddingBottom:"2%"}} className="justify-content-md-center">
            <Row style={{width:"50%"}} className="justify-content-center row-border">
                {/*<Col>*/}
                {/*    <div className="heading2" style={{textAlign:"center"}} >ghnbbcvdfyh</div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="heading2" style={{textAlign:"center"}} >ghnbbcvdfyh</div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="heading2" style={{textAlign:"center"}} >ghnbbcvdfyh</div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="heading2" style={{textAlign:"center"}} >ghnbbcvdfyh</div>*/}
                {/*</Col>*/}
                {product.types.map(type =>
                    <Col.Item
                        style={{cursor: 'pointer'}}
                        active={type.id === product.selectedType.id}
                        onClick={() => product.setSelectedType(type)}
                        key={type.id}
                    >
                       <div className="heading2" style={{textAlign:"center"}}>{type.name}</div>
                    </Col.Item>
                )}
            </Row>
        </Row>
    );
});

export default TypeBar;