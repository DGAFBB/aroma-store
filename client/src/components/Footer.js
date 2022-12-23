import React from 'react';
import {observer} from "mobx-react-lite";
import logo from "../assets/logo.svg";
import Row from "react-bootstrap/Row";
import {Container, NavItem} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../styles/Footer/footer.css"
import "../assets/stars.png"
import "../styles/Buttons/button.css"
import {ABOUT_ROUTE, BASE_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE} from "../utils/consts";
import {Link, NavLink, Route, useNavigate} from "react-router-dom";
import VK from "../assets/VK.svg";
import Tg from "../assets/Tg.svg";
import inst from "../assets/inst.svg"


const Footer = observer( () => {
    const navigate = useNavigate()
    return (
        <Container fluid className="justify-content-md-center"  style={{width:"100%", backgroundColor:"#5D4037"}}>
        <Row className="row-cont3 justify-content-md-center" style={{backgroundImage:"..assets/stars.png"}}>
            <Row className="row-cont5 justify-content-md-center" style={{paddingTop:"3%"}}>
                <text className="footer_font2">
                    Скидка 10% за подписку на наши новости
                </text>
            </Row>
            <Row className="row-cont5 justify-content-md-center" style={{paddingBottom:"3%"}}>
            <form className="form-inline justify-content-md-center" style={{width:"100%"}}>
                <input type="email" className="footer_form"  placeholder="E-mail">
                </input>
                    <button className="milk-button" style={{width:"14%", paddingBottom: "1%",paddingTop: "1%"}}>Подписаться</button>
            </form>
            </Row>
        </Row>
        <Row className="row-cont4 justify-content-md-center align-items-center" >
            <Col xs={4} className="d-flex flex-column-reverse">
                <Link style={{color:'#370601', paddingTop:"2%"}} onClick={() => navigate(ABOUT_ROUTE)} href="#about" className="col-link" to={ABOUT_ROUTE}>О нас</Link><p/>
                <Link style={{color:'#370601', paddingTop:"2%"}} onClick={() => navigate(CATALOG_ROUTE)} className="col-link" to={CATALOG_ROUTE}>Каталог</Link><p/>
                <Link style={{color:'#370601', paddingTop:"2%"}} onClick={() => navigate(DELIVERY_ROUTE)} className="col-link" to={DELIVERY_ROUTE}>Доставка</Link><p/>
                <Link style={{color:'#370601'}} onClick={() => navigate(CONTACTS_ROUTE)} className="col-link" to={CONTACTS_ROUTE}>Контакты</Link><p/>
            </Col>
            <Col xs={3} className=" img-cont justify-content-md-center align-items-center">
                <Row className="justify-content-md-center align-items-center">
                    <Link to={BASE_ROUTE}>
                   <img
                       style={{paddingTop:"13%", paddingBottom:"15%"}}
                       src= {logo}
                       alt="React Bootstrap logo"
                />
                    </Link>
                </Row>
                <Row className=" cont_icon justify-content-md-center align-items-center" >
                    <a href="https://vk.com/litarchive" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                        <img
                        style={{paddingTop:"4%", paddingBottom:"4%"}}
                        href="https://vk.com/litarchive"
                        src={VK}
                        alt={VK}
                    />
                    </a>
                    <a href="https://web.telegram.org/z/#-1231704267" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                    <img
                        style={{paddingLeft:"5%", paddingTop:"4%", paddingBottom:"4%"}}
                        href="https://web.telegram.org/z/#-1231704267"
                        src={Tg}
                        alt={Tg}
                    />
                    </a>
                    <a href="https://www.instagram.com/litarchive/" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                    <img
                        style={{paddingLeft:"5%", paddingTop:"4%", paddingBottom:"4%"}}
                        href="https://www.instagram.com/litarchive/"
                        src={inst}
                        alt={inst}
                    />
                    </a>
                </Row>
            </Col>
            <Col xs={4} className="justify-content-md-center align-items-center">
                <text style={{textAlign:"center"}} className="col-text justify-content-md-center align-items-center">
                    <p style={{textAlign:"center", paddingTop:"5%"}}>+7 (988) 680 42 22</p>
                    <p style={{textAlign:"center", paddingTop:"4%"}}>harmony@gmail.com</p>
                    <p style={{textAlign:"center", paddingTop:"4%"}}>Москва, ул. Московская, <br/>д 6, к 1</p>
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