import React from 'react';
import {Col, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FAVOR_ROUTE, ORDER_ROUTE, PERSONAL_ACCOUNT_ROUTE} from "../utils/consts";
import "../styles/fonts/fonts.css"

const AdminNavigate = () => {
    return (
        <Container>
            <Col className="justify-content-md-center">
                <Nav style={{color:'#370601'}}>
                    <Link style={{color:'#370601', paddingTop:"2%"}} className="col-link" to={PERSONAL_ACCOUNT_ROUTE} activeClassName='active1'>Личные данные</Link><p/>
                </Nav>
            </Col>
        </Container>
    );
};

export default AdminNavigate;