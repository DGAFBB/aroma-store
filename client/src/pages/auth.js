import React, {useContext, useState} from 'react';
import { Card, Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {observer} from "mobx-react-lite";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {
    ADMIN_ACCOUNT_ROUTE,
    ADMIN_ROUTE,
    BASE_ROUTE,
    GUEST_ROUTE,
    LOGIN_ROUTE, PERSONAL_ACCOUNT_ROUTE,
    REGISTRATION_ROUTE
} from "../utils/consts";
import {AdminLogin, AdminRegistration} from "../http/adminAPI";
import {GuestLogin, GuestRegistration} from "../http/guestAPI";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import "../styles/Form/form.css";
import "../styles/Buttons/button.css";
import "../styles/fonts/fonts.css"

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === ADMIN_ROUTE + LOGIN_ROUTE || location.pathname === GUEST_ROUTE + LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin && location.pathname === ADMIN_ROUTE + LOGIN_ROUTE) {
                data = await AdminLogin(login, password)
            } else if (isLogin && location.pathname === GUEST_ROUTE + LOGIN_ROUTE) {
                data = await GuestLogin(email)
            } else if (!isLogin && location.pathname === ADMIN_ROUTE + REGISTRATION_ROUTE) {
                data = await GuestRegistration(login, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            user.setRole(data.role)
            if (location.pathname === GUEST_ROUTE + LOGIN_ROUTE) {
                navigate(GUEST_ROUTE + PERSONAL_ACCOUNT_ROUTE)
            } else if (
                location.pathname === ADMIN_ROUTE + LOGIN_ROUTE ||
                location.pathname === ADMIN_ROUTE + REGISTRATION_ROUTE
            ) {
                navigate(ADMIN_ROUTE + ADMIN_ACCOUNT_ROUTE)
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '65.5vh' }}>
            <card style={{ width: 600, backgroundColor: "#EDE6E1"}} className="p-5">
                <h2 className="reg-head" >{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                {location.pathname === ADMIN_ROUTE + REGISTRATION_ROUTE || location.pathname === ADMIN_ROUTE + LOGIN_ROUTE ? (
                    <Form className="d-flex flex-column">
                        <input type="email" className="log-form"  placeholder="E-mail">
                        </input>
                        <label className="form-check-label">
                            <input className="form-check-input check-form" type="checkbox"> Подписаться на новости и скидки</input>
                        </label>
                        <input className="log-form" type="number"  placeholder="Контактный телефон">
                        </input>
                        <input className="log-form" type="password"  placeholder="Придумайте пароль">
                        </input>
                        <input className="log-form" type="password"  placeholder="Повторите пароль">
                        </input>
                        <input className="log-form" type="text"   placeholder="Введите свое имя">
                    </input>
                        <input className="log-form" type="text"   placeholder="Введите свою фамилию">
                        </input>
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <button className="brown-button" onClick={click}>
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </button>
                            {isLogin ? (
                                <div className="heading3">
                                    Нет профиля?{' '}
                                    <Link
                                        className="heading3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => navigate(ADMIN_ROUTE + REGISTRATION_ROUTE)}
                                    >
                                        Зарегистрироваться
                                    </Link>
                                </div>
                            ) : (
                                <div className="heading3">
                                    Есть профиль?{' '}
                                    <div
                                        className="heading3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => navigate(ADMIN_ROUTE + LOGIN_ROUTE)}
                                    >
                                        Войти
                                    </div>
                                </div>
                            )}
                        </Row>
                    </Form>
                ) : (
                    <Form className="d-flex flex-column">
                            <input className="log-form" type="number"  placeholder="Номер телефона">
                            </input>
                        <input className="log-form" type="password"  placeholder="Пароль">
                        </input>
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <button className="brown-button" onClick={click} style={{width:"40%"}}>
                                {isLogin ? 'Войти' : null}
                            </button>
                        </Row>
                    </Form>
                )}
            </card>
        </Container>
    )
});

export default Auth;