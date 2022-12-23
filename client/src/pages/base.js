import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import sec from "../assets/img2.svg";
import thd from "../assets/img_3.png";
import frst from "../assets/img1.png";
import "../styles/Container/container.css";
import fourth from "../assets/img_4.svg";
import ffth from "../assets/img_5.svg";
import "../styles/Image/imeges.css";
import "../styles/fonts/fonts.css"
import "../styles/Buttons/button.css"
import * as PropTypes from "prop-types";
// import product1 from "../assets/us_product1.png";
// import product2 from "../assets/us_product2.png";
// import product3 from "../assets/us_product3.png";
import us_product from "../assets/us_product.svg"
import ProductList from "../components/ProductList";

function SkipLink(props) {
    return null;
}

SkipLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const Base = observer(() => {

    return (
        <Container fluid>
            <Row className="justify-content-md-center row-cont2">
                <Col md="auto">
                    <img
                    src= {frst}
                    alt={frst}
                    />
                </Col>
                <Col md="auto">
                    <Container>
                    <img
                        src= {sec}
                        alt={sec}
                    />
                    </Container>
                </Col>
                <Col md="auto">
                    <img
                    src= {thd}
                    alt={thd}
                    />
                </Col>
            </Row>
            <Row style={{backgroundColor:"#5D4037"}} className="justify-content-md-center row-cont" id="/about">
                <Col md="auto" className="header-base">
                О нас
                </Col>
            </Row>
            <Row className="justify-content-md-center row-container" style={{marginTop:"6%"}}>
                <Col ms={3} className="justify-content-md-center">
                    <img
                        src= {fourth}
                        alt={fourth}
                        className="img_base1"
                    />
                </Col>
                <Col ms={4}>
                    <text className="text-base">
                    Harmony
                    </text>
                    <text className="text-base2">
                        – это крафтовый бренд, созданный компанией друзей в Москве. Мы производим ароматы для вашего дома - свечи из натурального соевого воска, натуральное ароматическое мыло и диффузоры с уникальными ароматами, которые собираем по всему миру.
                        <p style={{marginTop:"10px"}}>
                            У наших продуктов просто потрясающая арома отдача. Ведь мы отбираем только самые необычные и многосложные ароматы, которые интересно раскрываются при использовании.
                        </p>
                        <p>
                        Наш адрес: Москва, ул. Московская, 6 к1
                        </p>
                    </text>
                </Col>
                <Col ms={3} className="justify-content-md-center">
                    <img
                        src= {ffth}
                        alt={ffth}
                        className="img_base1"
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center row-cont" style={{paddingTop:"2%", paddingBottom:"1%"}}>
            <text className="header-base">Наши товары</text>
            </Row>
            <Row className="justify-content-md-center row-cont" style={{backgroundColor:"#5D4037"}}>

                <img
                    src= {us_product}
                    alt={us_product}
                    className="img_base1"
                />
            </Row>
                {/*<Col ms={3}>*/}
                {/*    <img*/}
                {/*        src= {product1}*/}
                {/*        alt={product1}*/}
                {/*        className="img_base1"*/}
                {/*    />*/}
                {/*</Col>*/}
                {/*<Col ms={3}>*/}
                {/*    <img*/}
                {/*        src= {product2}*/}
                {/*        alt={product2}*/}
                {/*        className="img_base1"*/}
                {/*    />*/}
                {/*</Col>*/}
                {/*<Col ms={3}>*/}
                {/*    <img*/}
                {/*        src= {product3}*/}
                {/*        alt={product3}*/}
                {/*        className="img_base1"*/}
                {/*    />*/}
                {/*</Col>*/}
            <Row className="justify-content-md-center row-cont">
                <Row style={{width:"77%", paddingBottom:"5%"}}>
                    <Col>
                        <p className="text-base0" style={{textAlign:"center",paddingTop:"5%", lineHeight:"20px"}}>
                        Мыло
                        </p>
                        <p className="text-base2_0" style={{textAlign:"center", lineHeight:"0px"}}>
                            натуральное ароматическое
                        </p>
                    </Col>
                    <Col>
                        <p className="text-base0" style={{textAlign:"center",paddingTop:"5%", lineHeight:"20px"}}>
                            Диффузоры
                        </p>
                        <p className="text-base2_0" style={{textAlign:"center", lineHeight:"0px"}}>
                            с уникальным ароматом
                        </p>
                    </Col>
                    <Col>
                        <p className="text-base0" style={{textAlign:"center",paddingTop:"5%", lineHeight:"20px"}}>
                            Свечи
                        </p>
                        <p className="text-base2_0" style={{textAlign:"center", lineHeight:"0px"}}>
                            из соевого воска
                        </p>
                    </Col>
                </Row>
            </Row>
            <Row className="justify-content-md-center">
                <text className="text-base">Популярное</text>
                <ProductList></ProductList>
            </Row>
        </Container>
    );
});
export default Base;