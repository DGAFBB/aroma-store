import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Admin_NavBar from "../components/Admin_NavBar";
import Admin_Navigate from "../components/Admin_Navigate";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import {fetchAdmin} from "../http/adminAPI";
import {Link} from "react-router-dom";
import {ADMIN_ACCOUNT_REG_ROUTE, BASE_ROUTE} from "../utils/consts";

const AdminAccount = observer(() => {
    // const [admin, setAdmin] = useState({info: []})
    // const {id} = useParams()
    // useEffect(() => {
    //     fetchAdmin(id).then(data => setAdmin(data))
    // }, [])

    return (
        <Container fluid>
            <Admin_NavBar/>
            <Row className="justify-content-md-center" style={{paddingTop:"5%", paddingRight:"15%"}}>
                <Col md={3} className="justify-content-md-center">
                    <Admin_Navigate/>
                </Col>
                <Col md={5} className="justify-content-md-center">
                    <card>
                        {/*<Row>*/}
                        {/*    {admin.info.map((info, index) =>*/}
                        {/*    <Row key={info.id} className="reg-head" style={{paddingBottom:"5%"}}>*/}
                        {/*        {info.title}: {info.description}*/}
                        {/*    </Row>*/}
                        {/*    )}*/}

                        {/*</Row>*/}
                        <div>
                            <Link to={ADMIN_ACCOUNT_REG_ROUTE}>
                            <button className="brown-button" style={{width:"45%", marginTop:"17%"}}>Изменить данные</button>
                            </Link>
                            <Link to={BASE_ROUTE}>
                            <button className="transparent-button2" style={{width:"35%", marginTop:"17%", marginBottom:"25%"}}>Выйти</button>
                            </Link>
                        </div>
                    </card>
                </Col>
            </Row>
        </Container>
    );
});

export default AdminAccount;