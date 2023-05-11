import React, {useContext, useState} from 'react';
import {Context} from "../../../../../../index";
import Selected from "../../../../../tag/select/select";
import styles from "../../inputBlock/stylesBlock.module.sass";

const DellZone = ({setActiveEditZone}) => {
    console.log("Рендер DellZone ____________________________________")

    const {store} = useContext(Context);
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [active, setActive] = useState(null)
    return (
        <div className={styles.main}>
            <div className={styles.oknovvoda}>
                <h6>
                    Создание зоны
                </h6>
                <div>
                    <br/>
                    Название зоны:
                    <input type="text" placeholder="Название зоны" value={name} onChange={event => setName(event.target.value)}/>
                    <Selected setActive={setActive} nameLabel={"Тип зоны"} objMap={store.type_zone} ID={"id_type_zone"}/>
                    <br/><br/> Цвет зоны: <br/>
                    <input type="color" placeholder="Название зоны" value={color} onChange={event => setColor(event.target.value)}/><br/><br/>
                    <button onClick={async ()=>{
                        await store.setSizeZon(name, color, store.type_zone[active].id_type_zone)

                        }}>Добавить зону</button>
                    <button onClick={ ()=>{
                        setActiveEditZone(true);
                    }}>Изменить зону</button>
                    <button onClick={async ()=>{
                        await store.setSizeZon(name, color, store.type_zone[active].id_type_zone)
                    }}>Удалить зону (не работает, если зона внесена в БД)</button>
                </div>
            </div>
        </div>
    );
};

export default DellZone;