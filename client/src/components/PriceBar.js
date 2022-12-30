import React from 'react';
import {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const PriceBar = observer( () => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.prices.map((price) =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={price.id === product.selectedPrice.id}
                    onClick={() => product.setSelectedPrice(price)}
                    key={price.id}
                >
                    {price.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});
export default PriceBar;
