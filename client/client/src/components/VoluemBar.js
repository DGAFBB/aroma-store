import React from 'react';
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const VolumeBar = observer( () => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.voluems.map(voluem =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={voluem.id === product.selectedVoluem.id}
                    onClick={() => product.setSelectedVoluem(voluem)}
                    key={voluem.id}
                >
                    {voluem.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default VolumeBar;
