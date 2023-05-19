import React from 'react';
import styles from "../../../meny/plan/nodeAndZon/inputBlock/stylesBlock.module.sass";
import TableInfoZone from "./tableInfoZone";
import TableInfoNode from "./tableInfoNode";
import TableInfoEdge from "./tableInfoEdge";

const InfoSklad = () => {
    return (
        <div className={styles.main}>
            <div className={styles.oknovvoda}>
                <h6>Информация о зонах</h6>
                <TableInfoZone/>
                <br/>
                <h6>Информация о узлах</h6>
                <TableInfoNode/>
                <br/>
                <h6>Информация о ребрах</h6>
                <TableInfoEdge/>
            </div>
        </div>
    );
};

export default InfoSklad;