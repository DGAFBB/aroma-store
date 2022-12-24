import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink, useNavigate} from "react-router-dom";
import {
    ADMIN_ACCOUNT_ROUTE, ADMIN_CATALOG_ROUTE,
    ADMIN_DELIVERIES_ROUTE,
    ADMIN_GUESTS_PANEL_ROUTE,
} from "../utils/consts";
import {observer} from "mobx-react-lite";
import "../styles/NavBar/NavBar.css";
import "../styles/fonts/fonts.css";

const AdminNavBar = observer( () => {
    const navigate = useNavigate()
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Row className="admin_nav" style={{paddingLeft:"8%", paddingTop:"1%", paddingBottom:"1%"}}>
                <Col>
                    <Row>
                        <Nav style={{color:'#370601', paddingRight:"10%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_CATALOG_ROUTE} activeClassName='active'>Товары</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601', paddingRight:"10%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_DELIVERIES_ROUTE} activeClassName='active'>Заказы</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601', paddingRight:"10%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_GUESTS_PANEL_ROUTE} activeClassName='active'>Пользователи</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601'}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_ACCOUNT_ROUTE} activeClassName='active'>Профиль</NavLink>
                        </Nav>
                    </Row>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
});

export default AdminNavBar;