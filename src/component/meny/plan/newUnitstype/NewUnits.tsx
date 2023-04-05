import React, {useContext, useState} from 'react';
import {Context} from "../../../../index";
const NewUnits = ({setVisible}) => {
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
        </div>
    );
};

export default NewUnits;