import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {observer} from "mobx-react-lite";
import {useLocation, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {AdminLogin, AdminRegistration} from "../http/adminAPI";
import {GuestLogin} from "../http/guestAPI";

const Auth = observer(() => {

});

export default Auth;