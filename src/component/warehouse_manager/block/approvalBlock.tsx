import React, {useContext, useState} from 'react';
import styles from '../../meny/plan/nodeAndZon/inputBlock/stylesBlock.module.sass'
import Selected from "../../tag/select/select";
import {Context} from "../../../index";

const ApprovalBlock = () => {
    console.log("Рендер ApprovalBlock ____________________________________")
    const {store} = useContext(Context);
    const [active, setActive] = useState(null)
    return (
        <div className={styles.main}>
            <div className={styles.oknovvoda}>
                <h6>Утверждение склада</h6>
                Выберите статус утверждения:
                <Selected active={active} setActive={setActive} nameLabel={"Выберите утверждение"} objMap={store.approval} ID={"id_status"}/>
                <br/><br/>
                <button>Сохранить</button>
            </div>
        </div>
    );
};

export default ApprovalBlock;