import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
const NewUnits = ({setVisible}) => {
    console.log("Рендер newUnitsType ____________________________________")

    const [name, setName] = useState('')
    const [name_old_units, setName_old_units] = useState('')
    const [name_new_units, setName_new_units] = useState('')
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
                    <input type="text" placeholder="Старое название ед. измерения" value={name_old_units} onChange={event => setName_old_units(event.target.value)} />
                    Новое название ед. измерения:
                    <input type="text" placeholder="Новое название ед. измерения" value={name_new_units} onChange={event => setName_new_units(event.target.value)} />
                    <br/>
                    <button onClick={()=>{store.addUnitsType(name); setName('');setVisible(false) }}>Изменить</button>
                </div>
            </div>
        </div>
    );
};

export default memo(NewUnits);