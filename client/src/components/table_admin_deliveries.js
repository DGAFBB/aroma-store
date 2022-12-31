import React from 'react';
import {Container, Row} from "react-bootstrap";

const TableAdminDeliveries = ({order, guest}) => {
    return (
        <Container fluid>
            <Row style={{width:"100%", paddingTop:"4%", paddingLeft:"5%", paddingBottom:"5%"}} className="justify-content-md-center align-items-center">
            <table width={"90%"}>
                <thead>
                <tr className="reg-head">
                    <th style={{width:"5%"}}>
                        <div>
                            <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                        </div>
                    </th>
                    <th style={{width:"5%"}}>ID</th>
                    <th style={{width:"15%"}}>Статус</th>
                    <th style={{width:"20%"}}>Дата</th>
                    <th style={{width:"20%"}}>Покупатель</th>
                    <th style={{width:"20%"}}>Телефон</th>
                    <th>Итого</th>
                </tr>
                <tr className="heading3">
                    <th style={{width:"5%", paddingTop:"5%"}}>
                        <div>
                            <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                        </div>
                    </th>
                    <th style={{width:"5%", paddingTop:"5%"}}>{order.id}</th>
                    <th style={{width:"15%", paddingTop:"5%"}}>{order.status}</th>
                    <th style={{width:"20%", paddingTop:"5%"}}>{order.datetime}</th>
                    <th style={{width:"20%", paddingTop:"5%"}}>{order.guest}</th>
                    <th style={{width:"20%", paddingTop:"5%"}}>{guest.tel}</th>
                    <th>{order.price}</th>
                </tr>
                </thead>
            </table>
        </Row>
        </Container>
    );
};

export default TableAdminDeliveries;