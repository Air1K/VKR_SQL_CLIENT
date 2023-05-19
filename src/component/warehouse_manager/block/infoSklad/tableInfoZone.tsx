import React, {useContext} from 'react';
import styles from "../../../meny/plan/nodeAndZon/areaNodeAndZon/zone/stylesZone.module.sass";
import {Context} from "../../../../index";


const TableInfoZone = () => {
    const {store} = useContext(Context);
    return (
        <table>
            <tr><th>№</th><th>Имя</th><th>Тип зоны</th><th>Цвет зоны</th></tr>
            {
                store.sizeZon.map((zone, index)=>
                    <tr key={index}><td>{index}</td><td>{zone.name}</td><td>{store.type_zone[zone.id_type_zone - 1].name}</td><td>{zone.color} <div className={styles.modalEditZone} style={{backgroundColor: zone.color}} ></div></td></tr>
                )
            }
        </table>
    );
};

export default TableInfoZone;