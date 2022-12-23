import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VK from "../assets/VK.svg";
import Tg from "../assets/Tg.svg";
import inst from "../assets/inst.svg";
import "../styles/fonts/fonts.css";
import "../styles/Buttons/button.css"

const Contacts = () => {
    return (
        <Container className="d-flex justify-content-center" style={{ minHeight: '60.5vh', paddingTop:"5%" }}>
            <Row>
                <Col>
                    <text >
                        <p className="heading2">По общим вопросам и заказам:</p>
                        <p className="heading6">
                        harmony@gmail.com
                        </p>
                        <p className="heading5">
                        +7 (988) 680 42 22
                        </p>
                        <p className="heading2" style={{paddingTop:"3%"}}>
                        По вопросам сотрудничества:
                        </p>
                        <p className="heading6">
                        harmonybusiness@gmail.com
                        </p>
                    </text>
                    <div style={{paddingTop:"3%"}}>
                        <a href="https://vk.com/litarchive" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                            <img
                                href="https://vk.com/litarchive"
                                src={VK}
                                alt={VK}
                            />
                        </a>
                        <a href="https://web.telegram.org/z/#-1231704267" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                            <img
                                href="https://web.telegram.org/z/#-1231704267"
                                src={Tg}
                                alt={Tg}
                            />
                        </a>
                        <a href="https://www.instagram.com/litarchive/" target='_blank' className='nav-link d-inline' rel="noopener noreferrer">
                            <img
                                href="https://www.instagram.com/litarchive/"
                                src={inst}
                                alt={inst}
                            />
                        </a>
                    </div>
                </Col>
                <Col>
                    <card style={{ width: "30%"}}>
                        <text className="heading2" >
                            Остались вопросы?
                        </text>
                        <input className="log-form" type="text"  placeholder="Ваше имя" style={{marginTop:"2%"}}>
                        </input>
                        <input type="email" className="log-form" placeholder="Ваш email" style={{marginTop:"2%"}}>
                        </input>
                        <input className="log-form" type="text" placeholder="Ваш вопрос" style={{marginTop:"2%"}}>
                        </input>
                        <button className="transparent-button" style={{width:"35%", marginTop:"7%"}}>Отправить</button>
                    </card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;