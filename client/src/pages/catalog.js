import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {fetchAromas, fetchProducts, fetchTypes} from "../http/productAPI";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import Pages from "../components/Pages";
import {Container, Dropdown, DropdownButton} from "react-bootstrap";
import ProductList from "../components/ProductList";
import PriceBar from "../components/PriceBar";
import search1 from "../assets/search.svg";

const Catalog = () => {
    return (
        <Container fluid className="justify-content-md-center">
            <TypeBar/>
            <Row className="mt-2">
                <Col md={4} style={{marginRight:0,  marginLeft:"auto", marginBottom:"3%"}}>
                    <Row>
                        <input style={{width:"50%", paddingTop:"2%", paddingBottom:"2%", paddingRight:"2%"}} type="search" placeholder="Поиск" className="log-form4"/>
                        <button style={{width:"15%"}} className="log-form3 justify-content-md-center">
                            <img
                                src={search1}
                                alt={search1}
                            />
                        </button>
                        <DropdownButton
                            align="end"
                            title="Порядок:"
                            id="dropdown-menu"
                            className="dropdown_cat">
                            <Dropdown.Item eventKey="1"></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2"></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3"></Dropdown.Item>
                            <Dropdown.Divider />
                        </DropdownButton>
                    </Row>
                </Col>
                <Row>
                    <Col>
                        <PriceBar/>
                        <AromaBar/>
                    </Col>
                    <Col md={7}>
                        <ProductList/>
                        <Pages/>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Catalog;