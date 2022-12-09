import React from 'react';
import {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import AromaBar from "../components/AromaBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAromas, fetchProducts, fetchTypes} from "../http/productAPI";
import Pages from "../components/Pages";
import NavBar from "../components/NavBar";
import fir from "../assets/base_img1.png";
import sec from "../assets/base_img2.png";
import thd from "../assets/base_img3.png";

const Base = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchAromas().then(data => product.setAromas(data))
        fetchProducts(null, null, 1, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedAroma.id, product.page, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedAroma,])

    return (
        <Container>
            <Row className="mt-2">
                <img
                    src= {fir}
                    alt={}
                    className="float-left"
                />
                <img
                    src= {sec}
                    alt={}
                    className="mx-auto d-block"
                />
                <img
                    src= {thd}
                    alt={}
                    className="float-right"
                />
                {/*<Col md={3}>*/}
                {/*    <TypeBar/>*/}
                {/*</Col>*/}
                {/*<Col md={9}>*/}
                {/*    <AromaBar/>*/}
                {/*    <Pages/>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    );
});
export default Base;