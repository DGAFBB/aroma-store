import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import sec from "../assets/img2.svg";
import thd from "../assets/img_3.png";
import frst from "../assets/img1.png";
import "../styles/Container/container.css";
import fourth from "../assets/img_4.jpeg";
import ffth from "../assets/img_5.jpeg";
import "../styles/Image/imeges.css";
import "../styles/fonts/fonts.css"
import "../styles/Buttons/button.css"
import * as PropTypes from "prop-types";


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
            <Row className="justify-content-md-center row-cont2" style={{marginTop:"6%"}}>
                <Col ms={3}>
                    <img
                        src= {fourth}
                        alt={fourth}
                        className="img_base1"
                    />
                </Col>
                <Col ms={3}>
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
                <Col ms={3}>
                    <img
                        src= {ffth}
                        alt={ffth}
                        className="img_base1"
                    />
                </Col>
            </Row>
        </Container>
    );
});
export default Base;