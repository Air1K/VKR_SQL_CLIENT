import React, {useContext, useState} from 'react';
import styles from './stylesBlock.module.sass'
import {Context} from "../../../../../index";
import Selected from "../../../../tag/select/select";

const Block = ({setVisibleDell, setMyModalZone}) => {

    console.log("Рендер Block ____________________________________")

    const {store} = useContext(Context);

    const [G1, setG1] = useState('')
    const [G2, setG2] = useState('')
    const [ves, setVes] = useState('')
    const [active, setActive] = useState(0)

    return (
        <div className={styles.main}>
            <div className={styles.oknovvoda}>
                <h6>
                    Задать растояние между двумя пунктами
                </h6>
                <div className={styles.box}>

                    <div className={styles.box1}>
                        Введите первый узел:
                        <input type="text" value={G1} onChange={event => setG1(event.target.value)}
                               placeholder="Введите первый узел"/>
                        Ведите второй узел:
                        <input type="text" value={G2} onChange={event => setG2(event.target.value)}
                               placeholder="Введите второй узел"/>
                    </div>
                    <div className={styles.box1}>
                        Введите расстояние между узлами:
                        <input type="number" value={ves} onChange={event => setVes(event.target.value)}
                               placeholder="Введите расстояние между узлами"/>
                        Укажите единицы измерения
                        <Selected active={active} setActive={setActive} nameLabel={"Ед. измерения"} objMap={store.units_type} ID={"id_units_type"}/>
                    </div>
                </div>
                <br/>
                <button onClick={async () => {
                    await store.matrixSmejUsel(G1, G2, ves);
                    await store.matrixAndZone();
                    await store.setEdgePush({
                        A: G1,
                        B: G2,
                        long: Number(ves),
                        id_units_type: store.units_type[active].id_units_type,
                        id_zone: null,
                    })
                }}>Задать расстояние
                </button>
                <button title="Удаление связи двух графов" onClick={async () => {
                    setVisibleDell(true)
                }}>Открыть окно удаления пути
                </button>
                <button onClick={async () => {
                    setMyModalZone(true)
                }}>Открыть окно назначения зоны
                </button>
            </div>
        </div>
    );
};

export default Block;