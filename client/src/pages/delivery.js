import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container, FormGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import * as PropTypes from "prop-types";

function FormControlLabel(props) {
    return null;
}

FormControlLabel.propTypes = {
    control: PropTypes.element,
    label: PropTypes.string
};

function Checkbox(props) {
    return null;
}

Checkbox.propTypes = {defaultChecked: PropTypes.bool};
const Delivery = observer( () => {
    return (
        <Container className="d-flex justify-content-center" style={{ minHeight: '60.5vh', paddingTop:"5%" }}>
            <Row style={{width:"100%"}}>
                <Col>
                   <text className="reg-head">Ваш город </text> <p/>
                    <div>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="Москва и МО" />
                        <label className="heading3">Москва и МО</label>
                    </div>
                    <div>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="Москва и МО" />
                        <label className="heading3">Другие города РФ</label>
                    </div>
                    <p/><text className="reg-head">Способы доствки</text>
                    <div>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="Москва и МО" />
                        <label className="heading3">Курьером</label>
                    </div>
                    <div>
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="Москва и МО" />
                        <label className="heading3">Самовывоз</label>
                    </div>
                </Col>
                <Col>
                    <text className="reg-head">Пункты самовывоза</text>
                </Col>
            </Row>
        </Container>
    );
});
export default Delivery;