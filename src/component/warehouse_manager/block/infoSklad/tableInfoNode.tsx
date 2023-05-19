import React, {useContext} from 'react';
import {Context} from "../../../../index";
const TableInfoNode = () => {
    const {store} = useContext(Context);

    const funcSearch = (id) => {
        console.log(store.idGraph)
        const index = store.sizeZon.findIndex(el => el.id_zone === id);
        return index
    }
    return (
        <table>
            <tr><th>№</th><th>id</th><th>Имя</th><th>Зона</th></tr>
            {
                store.idGraph.map((nodes, index)=>
                    <tr key={index}><td>{index}</td><td>{nodes.id_node}</td><td>{nodes.num}</td><td>{store.sizeZon[funcSearch(nodes.id_zone)].name}</td></tr>
                )
            }
        </table>
    );
};

export default TableInfoNode;