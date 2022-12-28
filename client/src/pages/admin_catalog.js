import React from 'react';
import {Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import Table_admin_catalog from "../components/table_admin_catalog";

const AdminCatalog = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Admin_NavBar/>
            <Table_admin_catalog/>
        </Container>
    );
};

export default AdminCatalog;