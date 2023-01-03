import React from 'react';
import {Container, Row} from "react-bootstrap";
import product1 from "../assets/product1.png"
import plus from "../assets/counter_plus.svg";
import delete_icon from "../assets/delete.svg";
import pen_icon from "../assets/pen.svg";
import {useNavigate} from "react-router-dom";

const TableAdminCatalog = ({product}) => {
    const navigate = useNavigate();
    const path = `${product.id}.png`
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
                <th style={{width:"20%"}}>Изображение</th>
                <th style={{width:"10%"}}>Артикул</th>
                <th style={{width:"20%"}}>Название</th>
                <th style={{width:"20%"}}>Описание</th>
                <th>Цена</th>
                <th style={{width:"5%"}}></th>
                <th style={{width:"5%"}}></th>
            </tr>
            <tr className="heading3">
                <th style={{width:"5%", paddingTop:"5%"}}>
                    <div>
                        <input className="form-check-input" type="checkbox" name="checkboxNoLabel" id="checkboxNoLabel" value="" />
                    </div>
                </th>
                <th style={{width:"5%", paddingTop:"3%"}}>{product.id}</th>
                <th style={{width:"10%", paddingTop:"3%"}}>
                    <img width={"45%"} src={process.env.REACT_APP_API_URL + path}/>
                </th>
                <th style={{width:"5%", paddingTop:"3%"}}>{product.article}</th>
                <th style={{width:"20%", paddingTop:"3%"}}>{product.title}</th>
                <th style={{width:"20%", paddingTop:"3%"}}>{product.description}</th>
                <th>{product.price}</th>
                <th style={{width:"5%", paddingTop:"3%"}}>
                    <button style={{background:"transparent"}}>
                        <img src={pen_icon} alt={pen_icon}/>
                    </button>
                </th>
                <th style={{width:"5%", paddingTop:"3%"}}>
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