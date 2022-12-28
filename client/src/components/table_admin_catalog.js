import React from 'react';
import {Row} from "react-bootstrap";

const TableAdminCatalog = () => {
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
    );
};

export default TableAdminCatalog;