import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import Admin_Navigate from "../components/Admin_Navigate";

const AdminAccount = () => {
    return (
        <Container fluid>
            <Admin_NavBar/>
            <Row className="justify-content-md-center" style={{paddingTop:"5%", paddingRight:"15%"}}>
                <Col md={3} className="justify-content-md-center">
                    <Admin_Navigate/>
                </Col>
                <Col>
                    <card>

                    </card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminAccount;