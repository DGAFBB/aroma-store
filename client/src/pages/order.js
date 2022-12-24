import React from 'react';
import {Card, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FAVOR_ROUTE, ORDER_ROUTE, PERSONAL_ACCOUNT_ROUTE} from "../utils/consts";
import Guest_NavBar from "../components/Guest_NavBar";


const Order = () => {
    return (
        <Container>
            <Col>
                <Guest_NavBar></Guest_NavBar>
            </Col>
            <Col>
                <Card>

                </Card>
            </Col>
        </Container>
    );
};

export default Order;