import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import Admin_Navigate from "../components/Admin_Navigate";

const Admin_account = () => {
    return (
        <Container fluid className="justify-content-md-center">
            <Admin_NavBar/>
            <Row className="justify-content-md-center" style={{paddingTop:"5%", paddingRight:"10%"}}>
                <Col md={2} className="justify-content-md-center">
                    <Admin_Navigate/>
                </Col>
                <Col md={4} className="justify-content-md-center">
                    <card>
                        <input className="log-form2" type="text"  placeholder="Имя">
                        </input>
                        <input className="log-form2" type="text"  placeholder="Фамилия" style={{marginTop:"6%"}}>
                        </input>
                        <input className="log-form2" type="text"  placeholder="Отчество" style={{marginTop:"6%"}}>
                        </input>
                        <Row style={{marginTop:"8%"}} className="justify-content-between">
                            <div>
                                <input className="radio" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" />
                                <label className="heading3">Мужской</label>
                            </div>
                            <div>
                                <input className="radio" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" />
                                <label className="heading3">Женский</label>
                            </div>
                            <div>
                                <input className="radio" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" />
                                <label className="heading3">Не указан</label>
                            </div>
                        </Row>
                        <input className="log-form2" type="date"  placeholder="Дата рождения" style={{marginTop:"6%"}}>
                        </input>
                        <input type="email" className="log-form2" placeholder="Должность" style={{marginTop:"6%"}}>
                        </input>
                        <input className="log-form2" type="tel" placeholder="Контактный телефон" style={{marginTop:"6%"}}>
                        </input>
                        <button className="brown-button" style={{width:"45%", marginTop:"17%"}}>Сохранить</button>
                        <button className="transparent-button2" style={{width:"35%", marginTop:"17%", marginBottom:"25%"}}>Выйти</button>
                    </card>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin_account;