import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FAVOR_ROUTE, ORDER_ROUTE, PERSONAL_ACCOUNT_ROUTE} from "../utils/consts";
import Guest_NavBar from "../components/Guest_NavBar";
import OrderList from "../components/OrderList";


const Order = ({order}) => {
    return (
        <Container>
            <Row>
            <Col md={3} className="justify-content-md-center">
                <Guest_NavBar></Guest_NavBar>
            </Col>
            <Col md={8}>
                <Row>
                    <text className="reg-head">Заказы {order.count}</text>
                </Row>
                <OrderList/>
            </Col>
            </Row>
        </Container>
    );
};

export default Order;