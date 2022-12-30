import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Guest_NavBar from "../components/Guest_NavBar";
import {BASE_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";

const PersonalAccountReg = () => {
    return (
        <Container>
            <Row>
                <Col md={3} className="justify-content-md-center">
                    <Guest_NavBar></Guest_NavBar>
                </Col>
                <Col md={5}>
                    <card style={{ width: "30%"}}>
                        <input className="log-form2" type="text"  placeholder="Имя">
                        </input>
                        <input className="log-form2" type="text"  placeholder="Фамилия" style={{marginTop:"6%"}}>
                        </input>
                        <input className="log-form2" type="text"  placeholder="Отчество" style={{marginTop:"6%"}}>
                        </input>
                        <input className="log-form2" type="date"  placeholder="Дата рождения" style={{marginTop:"6%"}}>
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
                        <input type="email" className="log-form2" placeholder="E-mail" style={{marginTop:"6%"}}>
                        </input>
                        <input className="log-form2" type="text" placeholder="Контактный тедефон" style={{marginTop:"6%"}}>
                        </input>
                        <button className="brown-button" style={{width:"45%", marginTop:"17%"}}>Сохранить</button>
                        <Link to={BASE_ROUTE}>
                        <button className="transparent-button2" style={{width:"35%", marginTop:"17%", marginBottom:"25%"}}>Выйти</button>
                        </Link>
                    </card>
                </Col>
            </Row>
        </Container>
    );
};

export default PersonalAccountReg;