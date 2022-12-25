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
import search1 from "../assets/search.svg"

const AdminNavBar = observer( () => {
    const navigate = useNavigate()
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Row className="admin_nav" style={{paddingLeft:"8%", paddingTop:"1%", paddingBottom:"1%"}}>
                <Col style={{verticalAlign:"middle"}}>
                    <Row style={{verticalAlign:"middle"}}>
                        <Nav style={{color:'#370601', paddingRight:"8%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_CATALOG_ROUTE} activeClassName='active'>Товары</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601', paddingRight:"8%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_DELIVERIES_ROUTE} activeClassName='active'>Заказы</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601', paddingRight:"8%"}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_GUESTS_PANEL_ROUTE} activeClassName='active'>Пользователи</NavLink>
                        </Nav>
                        <Nav style={{color:'#370601'}} >
                            <NavLink style={{color:'#370601'}} className="admin-header" to={ADMIN_ACCOUNT_ROUTE} activeClassName='active'>Профиль</NavLink>
                        </Nav>
                    </Row>
                </Col>
                <Col md={2} style={{marginRight:"7%", marginLeft:0}}>
                    <Row>
                        <input style={{width:"85%", paddingTop:"2%", paddingBottom:"2%"}} type="search" placeholder="Поиск" className="log-form4"/>
                        <button style={{width:"15%"}} className="log-form3 justify-content-md-center">
                            <img
                                src={search1}
                                alt={search1}
                            />
                        </button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default AdminNavBar;