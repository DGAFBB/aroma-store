import React from 'react';
import {observer} from "mobx-react-lite";
import logo from "../assets/logo.svg";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../styles/Footer/footer.css"
import "../assets/footer_stars.svg"
import "../styles/Buttons/button.css"
import {ABOUT_ROUTE, BASE_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";

const Footer = observer( () => {
    const navigate = useNavigate()
    return (
        <Container fluid className="justify-content-md-center"  style={{width:"100%", backgroundColor:"#5D4037"}}>
        <Row className="row-cont3 justify-content-md-center" style={{backgroundImage:"../client/src/assets/footer_stars.svg"}}>
            <Row className="row-cont5 justify-content-md-center" style={{paddingTop:"4%"}}>
                <text className="footer_font2">
                    Скидка 10% за подписку на наши новости
                </text>
            </Row>
            <Row className="row-cont5 justify-content-md-center" style={{paddingBottom:"4%"}}>
            <form className="form-inline justify-content-md-center" style={{width:"100%"}}>
                <input type="email" className="footer_form"  placeholder="E-mail">
                </input>
                    <button className="milk-button" style={{width:"14%", paddingBottom: "1%",paddingTop: "1%"}}>Подписаться</button>
            </form>
            </Row>
        </Row>
        <Row className="row-cont4 justify-content-md-center">
            <Col xs={4} className="d-flex flex-column-reverse">
                <Link style={{color:'#370601'}} onClick={() => navigate(ABOUT_ROUTE)} className="col-link" to={ABOUT_ROUTE}>О нас</Link><p/>
                <Link style={{color:'#370601'}} onClick={() => navigate(CATALOG_ROUTE)} className="col-link" to={CATALOG_ROUTE}>Каталог</Link><p/>
                <Link style={{color:'#370601'}} onClick={() => navigate(DELIVERY_ROUTE)} className="col-link" to={DELIVERY_ROUTE}>Доставка</Link><p/>
                <Link style={{color:'#370601'}} onClick={() => navigate(CONTACTS_ROUTE)} className="col-link" to={CONTACTS_ROUTE}>Контакты</Link><p/>
            </Col>
            <Col className="img-cont justify-content-md-center">
               <Link to={BASE_ROUTE}>
                   <img
                       src= {logo}
                       alt="React Bootstrap logo"
                />
               </Link>
            </Col>
            <Col xs={4} className="justify-content-md-center">
                <text className="col-text">+7 (988) 680 42 22<p/>
                    harmony@gmail.com<p/>
                    Москва, ул. Московская,<p/>
                    д 6, к 1
                </text>
            </Col>
        </Row >
            <Row className="row-cont5 justify-content-md-center">
                <text className="footer_font3">
                    © Все права защищены | 2022
                </text>
            </Row>
        </Container>
    );
});

export default Footer;