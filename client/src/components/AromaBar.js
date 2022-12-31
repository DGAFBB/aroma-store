import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";
import "../styles/CheckBox/CheckBoxs.css"

const AromaBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Col className="justify-content-md-center">
            <Row className="reg-head justify-content-md-center" style={{paddingBottom:"5%"}}>
                    Аромат
            </Row>
            <Row className="justify-content-md-center">
                <div>
                    <input className="form-check-input check_box" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                </div>
                {product.aromas.map(aroma =>
                    <text className="heading3"      style={{cursor:'pointer'}}
                              key={aroma.id}
                              onClick={() => product.setSelectedAroma(aroma)}
                              border={aroma.id === product.selectedAroma.id ? 'danger' : 'light'}
                >
                        {aroma.name}
                    </text>
                )}
            </Row>
        </Col>
    );
});

export default AromaBar;