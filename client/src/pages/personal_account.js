import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../styles/NavBar/NavBar.css"
import Guest_NavBar from "../components/Guest_NavBar";
import "../styles/CheckBox/Ratio.css"
import {Link} from "react-router-dom";
import { BASE_ROUTE, PERSONAL_ACCOUNT_REG_ROUTE} from "../utils/consts";

const PersonalAccount = ({guest}) => {
    return (

        <Container>
            <Row>
            <Col md={3} className="justify-content-md-center">
                <Guest_NavBar></Guest_NavBar>
            </Col>
            <Col md={5} className="justify-content-md-center">
                <card style={{ width: "30%"}}>
                    <Row>
                        {guest.info.map((info, index) =>
                        <Row key={info.id} className="reg-head" style={{paddingBottom:"5%"}}>
                            {info.title}: {info.description}
                        </Row>
                        )}

                    </Row>
                    <Link to={PERSONAL_ACCOUNT_REG_ROUTE}>
                        <button className="brown-button" style={{width:"45%", marginTop:"17%"}}>Изменит данные</button>
                    </Link>
                    <Link to={BASE_ROUTE}>
                        <button className="transparent-button2" style={{width:"35%", marginTop:"17%", marginBottom:"25%"}}>Выйти</button>
                    </Link>
                </card>
            </Col>
            </Row>
        </Container>
    );
};

export default PersonalAccount;