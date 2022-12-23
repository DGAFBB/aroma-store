import React from 'react';
import {Container} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";

const AdminCatalog = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Admin_NavBar></Admin_NavBar>
        </Container>
    );
};

export default AdminCatalog;