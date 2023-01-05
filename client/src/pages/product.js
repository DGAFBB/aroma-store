import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductListProduct from "../components/ProductListProduct";
import {Link} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";

const Product = () => {
    return (
        <Container fluid style={{paddingRight:"8%", paddingLeft:"8%"}} className="justify-content-md-center align-items-center">
            <Row>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
            <Col className="justify-content-md-center">
                <Row style={{paddingBottom:"4%"}}>
                    <text className="reg-head"> Вам может понравиться</text>
                </Row>
                {/*<ProductListProduct/>*/}
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