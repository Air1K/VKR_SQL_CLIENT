import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
const NewZone = ({setVisible}) => {
    console.log("Рендер NewZone ____________________________________")

    const [name, setName] = useState('')
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
        </div>
    );
};

export default memo(NewZone);