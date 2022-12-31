import React from 'react';
import {Container, Row} from "react-bootstrap";

const TableAdminGuests = ({guest}) => {
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
                    <th style={{width:"20%"}}>Имя</th>
                    <th style={{width:"15%"}}>Зарегестрирован</th>
                    <th style={{width:"20%"}}>Телефон</th>
                    <th style={{width:"15%"}}>Тип</th>
                </tr>
                <tr className="heading3">
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>
                        <div>
                            <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                        </div>
                    </th>
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>{guest.id}</th>
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>{guest.name}</th>
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>{guest.date}</th>
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>{guest.tel}</th>
                    <th style={{paddingTop:"3%", paddingBottom:"2%"}}>{guest.type}</th>
                </tr>
                </thead>
            </table>
        </Row>
        </Container>
    );
};

export default TableAdminGuests;