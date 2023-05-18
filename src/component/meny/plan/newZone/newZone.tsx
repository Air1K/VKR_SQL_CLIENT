import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
const NewZone = ({setVisible}) => {
    console.log("Рендер NewZone ____________________________________")

    const [name, setName] = useState('')
    const [name_old_type_zone, setName_old_type_zone] = useState('')
    const [name_new_type_zone, setName_new_type_zone] = useState('')
    const {store} = useContext(Context);
    return (
        <div>
            <div>
                <h6>
                    Добавление типа зоны
                </h6>
                <div>
                    <br/>
                    Название типа зоны:
                    <input type="text" placeholder="Название типа зоны" value={name} onChange={event => setName(event.target.value)} />
                    <br/>
                    <button onClick={()=>{store.addZone(name); setName(''); setVisible(false) }}>Создать новый тип</button>
                </div>
            </div>
            <div>
                <br/>
                <h6>
                    Изменение типа зоны
                </h6>
                <div>
                    <br/>
                    Старое название типа зоны:
                    <input type="text" placeholder="Старое название типа зоны" value={name_old_type_zone} onChange={event => setName_old_type_zone(event.target.value)} />
                    Новое название типа зоны:
                    <input type="text" placeholder="Новое название типа зоны" value={name_new_type_zone} onChange={event => setName_new_type_zone(event.target.value)} />
                    <br/>
                    <button onClick={()=>{ setVisible(false) }}>Изменить тип</button>
                </div>
            </div>
        </div>
    );
};

export default memo(NewZone);