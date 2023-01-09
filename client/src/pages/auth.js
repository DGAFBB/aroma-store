import React, {useContext, useState} from 'react';
import { Container, Form} from "react-bootstrap";
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
import {AdminLogin} from "../http/adminAPI";
import {GuestLogin, GuestRegistration} from "../http/guestAPI";
import {Context} from "../index";
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
                    <Form className="d-flex flex-column">
                        <h2 className="reg-head" >Авторизация</h2>
                            <input className="log-form" type="tel"  placeholder="Номер телефона" style={{marginTop:"2%"}}>
                            </input>
                        <input className="log-form" type="password"  placeholder="Пароль" style={{marginTop:"2%"}}>
                        </input>
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <button className="brown-button" onClick={click} style={{width:"40%", marginTop:"7%"}}>
                                Войти
                            </button>
                        </Row>
                        <div className="heading3" style={{paddingTop:"10%"}}>
                        Нет профиля?
                        <Link to={REGISTRATION_ROUTE}
                            className="heading3"
                            style={{ cursor: 'pointer'}}
                        >
                            Зарегистрироваться
                        </Link>
                    </div>
                    </Form>
            </card>
        </Container>
    )
});

export default Auth;