import React from 'react';
import {Col, Container, Nav} from "react-bootstrap";
import "../styles/fonts/fonts.css";

const AdminNavigate = () => {
    return (
        <Container>
            <Col className="justify-content-md-center">
                    <text style={{fontWeight:"bold"}} className="reg-head">Личные данные</text><p/>
            </Col>
        </Container>
    );
};

export default AdminNavigate;