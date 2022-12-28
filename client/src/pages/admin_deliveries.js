import React from 'react';
import {Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";

const AdminDeliveries = () => {
    return (
        <Container fluid style={{paddingRight:"0%", paddingLeft:"0%"}}>
            <Admin_NavBar/>
            <Row style={{width:"90%"}} className="justify-content-md-center align-items-center">
                <table>
                    <thead>
                    <tr className="reg-head">
                        <th style={{width:"4%"}}>
                            <div>
                                <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                            </div>
                        </th>
                        <th style={{width:"%"}}>Изображение</th>
                        <th >Артикул</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>

                </table>
            </Row>
        </Container>
    );
};

export default AdminDeliveries;