import React from 'react';
import {Row} from "react-bootstrap";

const TableAdminGuests = () => {
    return (
        <Row style={{width:"90%"}} className="justify-content-md-center align-items-center">
            <table>
                <thead>
                <tr className="reg-head">
                    <th style={{width:"4%"}}>
                        <div>
                            <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                        </div>
                    </th>
                    <th style={{width:"%"}}>ID</th>
                    <th >Имя</th>
                    <th>Зарегестрирован</th>
                    <th>Телефон</th>
                    <th>Тип</th>
                </tr>
                </thead>
            </table>
        </Row>
    );
};

export default TableAdminGuests;