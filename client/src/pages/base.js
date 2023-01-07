import React from 'react';
import {Container, Dropdown, DropdownButton} from "react-bootstrap";
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
import {Link} from "react-router-dom";
import {
    ADMIN_ACCOUNT_ROUTE,
    ADMIN_CATALOG_ROUTE,
    CATALOG_ROUTE, ORDER1_ROUTE,
    PERSONAL_ACCOUNT_ROUTE,
    PRODUCT1_ROUTE
} from "../utils/consts";
import ProductItem from "../components/ProductItem";
import search1 from "../assets/search.svg";
import ProductListPopular from "../components/productlistPopular";

function SkipLink(props) {
    return null;
}

SkipLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const Base = observer(() => {

    return (
        <Container fluid className="justify-content-md-center align-items-center">
            <Row className="justify-content-md-center" style={{marginBottom:"5%"}}>
                <div className="col-container">
                <Col md="auto" style={{textAlign:"center"}} className="col11 justify-content-md-center">
                    <img
                    src= {frst}
                    alt={frst}
                    />
                </Col>
                <Col md="auto" style={{textAlign:"center"}} className="col11 justify-content-md-center">
                    <img
                        src= {sec}
                        alt={sec}
                    />
                </Col>
                <Col md="auto" style={{textAlign:"center"}} className="col11 justify-content-md-center">
                    <img
                    src= {thd}
                    alt={thd}
                    />
                </Col>
                </div>
            </Row>
            <Row style={{backgroundColor:"#5D4037"}} className="justify-content-md-center" id="about">
                <Col md="auto" className="header-base">
                О нас
                </Col>
            </Row>
            <Row className="justify-content-md-center row-container" style={{marginTop:"6%"}}>
                <Col className="col_c justify-content-md-center align-items-center">
                    <img
                        style={{paddingBottom:"15%", paddingLeft:"8%"}}
                        src= {fourth}
                        alt={fourth}
                        className="img_base1"
                    />
                </Col>
                <Col md={4} className="col_c">
                    <text className="text-base">
                    Harmony
                    </text>
                    <text className="text-base2">
                        – это крафтовый бренд, созданный компанией
                        <br/> друзей в Москве. Мы производим ароматы для вашего дома - свечи из натурального соевого воска, натуральное ароматическое мыло и диффузоры с уникальными ароматами, которые собираем по всему миру.
                        <p style={{marginTop:"10px"}}>
                            У наших продуктов просто потрясающая арома отдача. Ведь мы отбираем только самые необычные и многосложные ароматы, которые интересно раскрываются при использовании.
                        </p>
                        <p>
                        Наш адрес: Москва, ул. Московская, 6 к1
                        </p>
                    </text>
                    <Row className="justify-content-md-center align-items-center" style={{paddingTop:"8%", paddingBottom:"20%"}}>
                    <Link to={CATALOG_ROUTE} style={{paddingRight:"23%"}}><button className="brown-button" style={{width:"146%", color: "#E8E0DA", paddingTop:"5px", paddingBottom:"5px"}}>Смотреть каталог</button></Link>
                    </Row>
                </Col>
                <Col className="col_c justify-content-md-center align-items-center">
                    <img
                        style={{paddingLeft:"20%"}}
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
            <Row className="justify-content-md-center" style={{paddingTop:"3%"}}>
                    <text className="header-base0">Популярное</text>
                </Row>
            <Row className="justify-content-md-center align-items-center" style={{width:"90%" , paddingTop:"3%", paddingLeft:"13%"}}>
                <ProductListPopular/>
            </Row>
            <Row style={{paddingTop:"2%", paddingBottom:"5%", paddingRight:"5%"}} className="justify-content-md-center align-items-center" >
                <Link to={CATALOG_ROUTE}>
                    <button className="brown-button" style={{width:"140%", color: "#E8E0DA", paddingTop:"5px", paddingBottom:"5px"}}>
                        Смотреть каталог
                    </button>
                </Link>
            </Row>
        </Container>
    );
});
export default Base;