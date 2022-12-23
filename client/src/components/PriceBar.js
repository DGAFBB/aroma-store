import React from 'react';
import {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const PriceBar = observer( () => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.prices.map(volm =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={volm.id === product.selectedVolm.id}
                    onClick={() => product.setSelectedVolm(volm)}
                    key={volm.id}
                >
                    {volm.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});
export default PriceBar;
