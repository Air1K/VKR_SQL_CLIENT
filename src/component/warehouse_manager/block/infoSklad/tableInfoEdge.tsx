import React, {useContext} from 'react';
import {Context} from "../../../../index";
const TableInfoEdge = () => {
    const {store} = useContext(Context);
    return (
        <table>
            <tr><th>№</th><th>id</th><th>Точка 1</th><th>Точка 2</th><th>Длина</th><th>Ед. измерения</th></tr>
            {
                store.edge.map((edges, index)=>
                    <tr key={index}><td>{index}</td><td>{edges.id_edge}</td><td>{edges.A}</td><td>{edges.B}</td><td>{edges.long}</td><td>{store.units_type[edges.id_units_type - 1].name}</td></tr>
                )
            }
        </table>
    );
};

export default TableInfoEdge;