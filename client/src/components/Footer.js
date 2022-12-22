import React from 'react';
import {observer} from "mobx-react-lite";
import logo from "../assets/logo.svg";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../styles/Footer/footer.css"
import "../assets/footer_stars.svg"
import "../styles/Buttons/button.css"

const Footer = observer( () => {
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
            <Col xs={5}>
                <text></text>
            </Col>
            <Col>
                <img
                src= {logo}
                alt="React Bootstrap logo"
                />
            </Col>
            <Col xs={5}>
                <text></text>
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