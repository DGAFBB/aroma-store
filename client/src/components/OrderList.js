import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductItem from "./ProductItem";
import OrderItem from "./OrderItem";

const OrderList = ({order, product}) => {
    return (
        <Row>
            {order.products.map(order =>
                <OrderItem key={order.id} order={order}/>
            )}
        </Row>
    );
};

export default OrderList;