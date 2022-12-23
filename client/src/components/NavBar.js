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
    LOGIN_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
import "../styles/NavBar/NavBar.css";
import "../styles/fonts/fonts.css";
import "../styles/Image/Logo.css";
import "../styles/fonts/Brand_name.css";
import logo from "../assets/logo.svg";

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
                    <Nav style={{color:'#370601'}} className="navbar-light navbar-brand navbar-mar">
                        <NavLink style={{color:'#370601'}} onClick={() => navigate(CATALOG_ROUTE)}  to={CATALOG_ROUTE} activeClassName='active'>Каталог</NavLink>
                    </Nav>
                <Nav style={{color:'#370601'}} className="navbar-light navbar-brand navbar-mar">
                    <NavLink style={{color:'#370601'}} onClick={() => navigate(CONTACTS_ROUTE)}  to={CONTACTS_ROUTE} activeClassName='active'>Контакты</NavLink>
                </Nav>
                <Navbar.Brand onClick={() => navigate(BASE_ROUTE)} className="log">
                    <NavLink to={BASE_ROUTE} activeClassName='active'><img
                        src= {logo}
                        alt="React Bootstrap logo"
                    />
                    </NavLink>
                </Navbar.Brand>
                <Nav style={{color:'#370601'}} className="navbar-light navbar-brand navbar-mar">
                   <NavLink style={{color:'#370601'}} onClick={() => navigate(BASKET_ROUTE)} to={BASKET_ROUTE} activeClassName='active'>Корзина</NavLink>
                </Nav>
                    {user.isAuth ?
                        <Nav style={{color: '#370601'}} className="navbar-light navbar-brand navbar-mar">
                            <NavLink
                        onClick={() => navigate(ADMIN_ROUTE)}
                             to={ADMIN_ROUTE} activeClassName='active'>
                        Администратор
                            </NavLink>
                            <NavLink
                        onClick={() => logOut()}
                             to={BASE_ROUTE} activeClassName='active'>
                        Выйти
                            </NavLink>
                        </Nav>
                        :
                        <Nav style={{color: '#370601'}} className="navbar-light navbar-brand navbar-mar">
                            <NavLink style={{color: '#370601'}} onClick={() => navigate(LOGIN_ROUTE)} to={LOGIN_ROUTE} activeClassName='active'>Войти</NavLink>
                        </Nav>
                        }
            </Container>
        </Navbar>
    );
});
export default NavBar;