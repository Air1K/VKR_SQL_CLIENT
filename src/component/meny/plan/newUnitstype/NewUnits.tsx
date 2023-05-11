import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
const NewUnits = ({setVisible}) => {
    console.log("Рендер newUnitsType ____________________________________")

    const [name, setName] = useState('')
    const {store} = useContext(Context);
    return (
        <div>
            <div>
                <h6>
                    Добавление ед. измерения
                </h6>
                <div>
                    <br/>
                    Название ед. измерения:
                    <input type="text" placeholder="Название типа зоны" value={name} onChange={event => setName(event.target.value)} />
                    <br/>
                    <button onClick={()=>{store.addUnitsType(name); setName('');setVisible(false) }}>Создать</button>
                </div>
            </div>
            <div>
                <br/>
                <h6>
                    Изменение ед. измерения
                </h6>
                <div>
                    <br/>
                    Старое название ед. измерения:
                    <input type="text" placeholder="Старое название ед. измерения" value={name} onChange={event => setName(event.target.value)} />
                    Новое название ед. измерения:
                    <input type="text" placeholder="Новое название ед. измерения" value={name} onChange={event => setName(event.target.value)} />
                    <br/>
                    <button onClick={()=>{store.addUnitsType(name); setName('');setVisible(false) }}>Изменить</button>
                </div>
            </div>
        </div>
    );
};

export default memo(NewUnits);