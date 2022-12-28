import React from 'react';
import {Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import TableAdminDeliveries from "../components/table_admin_deliveries";

const AdminDeliveries = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Admin_NavBar/>
            <TableAdminDeliveries/>
        </Container>
    );
};

export default AdminDeliveries;