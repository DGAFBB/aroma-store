import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Delivery = observer( () => {
    return (
        <Container className="d-flex justify-content-center" style={{ minHeight: '60.5vh', paddingTop:"5%" }}>
            <Row>
                <Col>
                   <text className="reg-head">Ваш город </text>
                {/*    <div className="form-check">*/}
                {/*        <label className="form-check-label">*/}
                {/*            <input type="radio" className="form-check-input">Другие города РФ</input>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div className="form-check">*/}
                {/*        <label className="form-check-label">*/}
                {/*            <input type="radio" className="form-check-input">Москва и МО</input>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                    <text className="reg-head">Способы доствки</text>
                {/*    <div className="form-check">*/}
                {/*        <label className="form-check-label">*/}
                {/*            <input type="radio" className="form-check-input">Курьером </input>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div className="form-check">*/}
                {/*        <label className="form-check-label">*/}
                {/*            <input type="radio" className="form-check-input">Самовывоз</input>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
});
export default Delivery;