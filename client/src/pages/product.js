import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductListProduct from "../components/ProductListProduct";
import {Link, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";
import Image from "react-bootstrap/Image";
import product1 from "../assets/product1.png"
import "../styles/Buttons/button.css";
import heart from "../assets/heart.svg";

const Product = ({product}) => {
    const navigate = useNavigate();
    const path = `${product.id}.png`
    return (
        <Container fluid style={{paddingRight:"15%", paddingLeft:"15%"}} className="justify-content-md-center align-items-center">
            <Row style={{paddingBottom:"10%", paddingTop:"5%"}}>
                <Col md={4}>
                    <div style={{width:"100%"}} className="card_style align-items-center">
                        <Image width="98%" height="98%" src={process.env.REACT_APP_API_URL + path} style={{paddingTop:"2%", paddingLeft:"2%", paddingBottom:"2%"}}/>
                    </div>
                </Col>
                <Col md={4} style={{marginLeft:"10%"}}>
                    <div style={{paddingBottom:"38%", marginLeft:"1%"}}>
                    <text className="reg-head">{product.title}</text>
                    <text className="reg-head08"><br/>{product.first_description}</text>
                    </div>
                    <div style={{paddingBottom:"8%", marginLeft:"1%"}}>
                    <text className="heading3"><p/>{product.weight}</text>
                    <text className="price_font"><br/>{product.price}</text>
                    </div>
                    <Row style={{marginLeft:"1%"}}>
                        <div style={{width:"100%"}} className="align-items-center">
                            <button style={{width:"70%"}} className="transparent-button">Добавить в корзину</button>
                            <button className="transparent-button_heart" style={{left:"auto", right:0, paddingBottom:"1%", paddingTop:"2%",paddingLeft:"1%", paddingRight:"1%", marginLeft:"3%"}}>
                                <img width="90%" src={heart} alt={heart}/>
                            </button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Col className="justify-content-md-center" style={{paddingBottom:"10%"}}>
                <Row>
                    <text className="reg-head">Описание</text>
                </Row>
                <Row>
                <Col md={4}>
                    <Row className="heading3" style={{paddingTop:"10%"}}> {product.description}</Row>
                    <Row className="article_font" style={{paddingTop:"15%"}}>артикул {product.article}</Row>
                </Col>
                <Col md={6} style={{paddingLeft:"13%"}}>
                    <Row style={{paddingTop:"10%"}} className="heading3">тип продукта.........................{product.type}</Row>
                    <Row className="heading3" style={{paddingTop:"3%"}}>группа ароматов...................{product.aroma}</Row>
                    <Row className="heading3" style={{paddingTop:"3%"}}>объем.....................................{product.volume}</Row>
                    <Row className="heading3" style={{paddingTop:"3%"}}>состав....................................{product.composition}</Row>
                </Col>
                </Row>
            </Col>
            <Col className="justify-content-md-center">
                <Row style={{paddingBottom:"4%"}}>
                    <text className="reg-head"> Вам может понравиться</text>
                </Row>
                <ProductListProduct/>
                <Row style={{paddingTop:"3%", paddingBottom:"6%", paddingRight:"5%"}} className="justify-content-md-center align-items-center" >
                    <Link to={CATALOG_ROUTE}>
                        <button className="brown-button" style={{width:"140%", color: "#E8E0DA", paddingTop:"6px", paddingBottom:"6px"}}>
                            Смотреть все
                        </button>
                    </Link>
                </Row>
            </Col>
        </Container>
    );
};

export default Product;