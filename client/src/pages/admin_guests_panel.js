import React from 'react';
import {Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import Table_admin_guests from "../components/table_admin_guests";

const AdminGuestsPanel = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Admin_NavBar/>
            <Table_admin_guests/>
        </Container>
    );
};

export default AdminGuestsPanel;