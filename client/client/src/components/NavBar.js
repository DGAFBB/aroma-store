import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {
    ADMIN_ROUTE,
    BASE_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    CONTACTS_ROUTE,
    DELIVERY_ROUTE, FAVOR_ROUTE,
    LOGIN_ROUTE
} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
import "../styles/NavBar/NavBar.css";
import "../styles/fonts/fonts.css";
import "../styles/Image/Logo.css";
import "../styles/fonts/Brand_name.css";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar>
            <Container className="navbar">
                <NavLink style={{color:'#370601'}} to={CATALOG_ROUTE} className="navbar-light navbar-brand">Каталог</NavLink>
                <NavLink style={{color:'#370601'}} to={DELIVERY_ROUTE} className="navbar-light navbar-brand">Доставка</NavLink>
                <NavLink style={{color:'#370601'}} to={CONTACTS_ROUTE} className="navbar-light navbar-brand">Контакты</NavLink>
                <Navbar.Brand to={BASE_ROUTE}>
                    <img
                        src="../assets/logo.svg"
                        className="d-inline-block align-top log"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <NavLink style={{color:'#370601'}} to={FAVOR_ROUTE} className="navbar-light navbar-brand">Избранное</NavLink>
                <NavLink style={{color:'#370601'}} to={BASKET_ROUTE} className="navbar-light navbar-brand">Корзина</NavLink>
                {user.isAuth ?
                <Nav className="ml-auto navbar-light navbar-brand" style={{color: '#370601'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Администратор
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className="ml-2"
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});
export default NavBar;