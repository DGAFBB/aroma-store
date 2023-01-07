import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {fetchAromas, fetchProducts, fetchTypes} from "../http/productAPI";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import Pages from "../components/Pages";
import {Container, Dropdown, DropdownButton} from "react-bootstrap";
import ProductList from "../components/ProductList";
import PriceBar from "../components/PriceBar";
import search1 from "../assets/search.svg";
import ProductListPopular from "../components/productlistPopular";

const Catalog = () => {
    return (
        <Container fluid className="justify-content-md-center">
            <TypeBar/>
                    <Row style={{height:"5%", marginRight:"8%",  marginLeft:"auto", paddingTop:"4%", width:"30%"}}>
                        <input style={{width:"80%", paddingTop:"2%", paddingBottom:"2%", }} type="search" placeholder="Поиск" className="log-form4"/>
                        <button style={{width:"20%"}} className="log-form3 justify-content-md-center">
                            <img
                                src={search1}
                                alt={search1}
                            />
                        </button>
                    </Row>
                <Row style={{paddingTop:"5%"}}>
                    <Col md={4} className="justify-content-md-center">
                        <PriceBar/>
                        <AromaBar/>
                    </Col>
                    <Col md={8}>
                        <ProductList/>
                        <Pages/>
                    </Col>
                </Row>
        </Container>
    );
};

export default Catalog;