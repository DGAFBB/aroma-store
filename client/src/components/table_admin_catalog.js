import React from 'react';
import {Container, Row} from "react-bootstrap";
import product1 from "../assets/product1.png"
import plus from "../assets/counter_plus.svg";
import delete_icon from "../assets/delete.svg";
import pen_icon from "../assets/pen.svg";

const TableAdminCatalog = () => {
    return (
        <Container fluid>
        <Row style={{width:"100%", paddingTop:"4%"}} className="justify-content-md-center align-items-center">
        <table width={"100%"}>
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
            <tr className="reg-head">
                <th style={{width:"4%"}}>
                    <div>
                        <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                    </div>
                </th>
                <th style={{width:"%"}}>1</th>
                <th style={{width:"%"}}>
                    <img width={"40%"} src={product1} alt={product1}/>
                </th>
                <th >2548</th>
                <th>gcjfytjbchh bnvgfyuuhj</th>
                <th>nbhvgctyyg bvgchfgh</th>
                <th>1800 P</th>
                <th>
                    <button style={{background:"transparent"}}>
                        <img src={pen_icon} alt={pen_icon}/>
                    </button>
                </th>
                <th>
                    <button style={{background:"transparent"}}>
                        <img src={delete_icon} alt={pen_icon}/>
                    </button>
                </th>
            </tr>
            </thead>
        </table>
        </Row>
        </Container>
    );
};

export default TableAdminCatalog;