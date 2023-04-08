import React, {useContext, useState} from 'react';
import {Context} from "../../../../../../index";
import Selected from "../../../../../tag/select/select";

const DellZone = ({setMyModalZone}) => {
    const {store} = useContext(Context);
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [active, setActive] = useState(0)
    return (
        <div>
            <div>
                <h6>
                    Создание зоны
                </h6>
                <div>
                    <br/>
                    Название зоны:
                    <input type="text" placeholder="Название зоны" value={name} onChange={event => setName(event.target.value)}/>
                    <Selected setActive={setActive} nameLabel={"Тип зоны"} objMap={store.type_zone} ID={"id_type_zone"}/>
                    Цвет зоны: <br/>
                    <input type="color" placeholder="Название зоны" value={color} onChange={event => setColor(event.target.value)}/><br/><br/>
                    <button onClick={async ()=>{
                        await store.setSizeZon(name, color, active)
                        await setMyModalZone(false);
                        }}>Создать зону</button>
                    <button onClick={()=>{setMyModalZone(false);}}>Отменить создание</button>
                </div>
            </div>
        </div>
    );
};

export default DellZone;