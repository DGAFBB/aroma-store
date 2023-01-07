import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import TableAdminDeliveries from "../components/table_admin_deliveries";
import Pages from "../components/Pages";

const AdminDeliveries = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Row>
                <Col style={{paddingRight:"auto", paddingLeft:0}}><Pages/></Col>
                <Col style={{paddingRight:0, paddingLeft:"auto"}}>
                    <Row>
                        <button className="brown-button" style={{width:"140%", color: "#E8E0DA", paddingTop:"5px", paddingBottom:"5px"}}>
                            Сохранить
                        </button>
                    </Row>
                </Col>
            </Row>
            <Admin_NavBar/>
            <TableAdminDeliveries/>
        </Container>
    );
};

export default AdminDeliveries;