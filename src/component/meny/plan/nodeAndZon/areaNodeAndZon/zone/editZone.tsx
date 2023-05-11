import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../../../index";
import Selected from "../../../../../tag/select/select";
import styles from "./stylesZone.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil,  faTrash} from '@fortawesome/free-solid-svg-icons';
const EditZone = () => {
    console.log("Рендаер EditZone")

    const {store} = useContext(Context);
    const [activeZone, setActiveZone] = useState(null)
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [active, setActive] = useState(null)
    function addEdit(name, color, active, id){
        setName(name)
        setColor(color)
        setActive(store.type_zone.findIndex(el=>el.id_type_zone===active))
        setActiveZone(id)
        console.log(store.type_zone.findIndex(el=>el.id_type_zone===active), "====", active)
    }
    useEffect(()=>{
        return ()=> {
                    setName('')
                    setColor('')
                    setActive(null)
                    setActiveZone(null)
                    console.log("unmount +++++++++++++++++++++++++++++")
                };
    }, [])

    // useEffect(()=>{
    //     return ()=> {
    //         setName('')
    //         setColor('')
    //         setActive(null)
    //         setActiveZone(null)
    //         console.log("unmount")
    //     };
    // }, [])
    return (
        <div>
            <div>
                <h6>
                    Редактор зон
                </h6>
            </div>
            {activeZone === null ?
                <div>
                   Выберите зону для изменения
                    <br/>
                    <table>
                        <tr><th>№</th><th>Имя</th><th>Тип зоны</th><th>Цвет зоны</th></tr>
                        {
                            store.sizeZon.map((zone, index)=>
                                <tr key={index}><td>{index}</td><td>{zone.name}</td><td>{store.type_zone[zone.id_type_zone - 1].name}</td><td>{zone.color} <div className={styles.modalEditZone} style={{backgroundColor: zone.color}} ></div></td><td><FontAwesomeIcon icon={faPencil} style={{color: "#a5a546", cursor: 'pointer'}} onClick={()=>{addEdit(zone.name, zone.color, zone.id_type_zone, index)}}/></td><td><FontAwesomeIcon icon={faTrash} style={{color: "#db4040", cursor: 'pointer'}} /></td></tr>
                            )
                        }
                    </table>
                </div>:
                <div>
                    <div>
                        <div>
                            <br/>
                            Название зоны:
                            <input type="text" placeholder="Название зоны" value={name} onChange={event => setName(event.target.value)}/>
                            <Selected active={active} setActive={setActive} nameLabel={"Тип зоны"} objMap={store.type_zone} ID={"id_type_zone"}/>
                            <br/><br/> Цвет зоны: <br/>
                            <input type="color" placeholder="Название зоны" value={color} onChange={event => setColor(event.target.value)}/><br/><br/>
                        </div>
                    </div>
                    <button>Изменить</button>
                </div>
            }

        </div>
    );
};

export default EditZone;