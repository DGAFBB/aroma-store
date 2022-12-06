import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const AromaBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.aromas.map(aroma =>
                <Card
                    style={{cursor:'pointer'}}
                    key={aroma.id}
                    className="p-3"
                    onClick={() => product.setSelectedAroma(aroma)}
                    border={aroma.id === product.selectedAroma.id ? 'danger' : 'light'}
                >
                    {aroma.name}
                </Card>
            )}
        </Row>
    );
});

export default AromaBar;