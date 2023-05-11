import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../../../index";
import styles from "../zone/stylesZone.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";
import Selected from "../../../../../tag/select/select";

const EditNode = () => {
    console.log("Рендаер EditNode")

    const {store} = useContext(Context);
    const [activeNode, setActiveNode] = useState(null)
    const [name, setName] = useState('')
    function addEdit(name, index){
        setName(name)
        setActiveNode(index)
    }
    useEffect(()=>{
        return ()=> {
            setName('')
            setActiveNode(null)
            console.log("unmount +++++++++++++++++++++++++++++")
        };
    }, [])

    return (
        <div>
            <div>
                <h6>
                    Редактор точек
                </h6>
            </div>
            {activeNode === null ?
                <div>
                    Выберите точку для изменения
                    <br/>
                    <table>
                        <tr><th>№</th><th>Имя</th></tr>
                        {
                            store.idGraph.map((nodes, index)=>
                                <tr key={index}><td>{index}</td><td>{nodes.num}</td><td><FontAwesomeIcon icon={faPencil} style={{color: "#a5a546", cursor: 'pointer'}} onClick={()=>{addEdit(nodes.num, index)}}/></td><td><FontAwesomeIcon icon={faTrash} style={{color: "#db4040", cursor: 'pointer'}} /></td></tr>
                            )
                        }
                    </table>
                </div>:
                <div>
                    <div>
                        <div>
                            <br/>
                            Название точки:
                            <input type="text" placeholder="Название зоны" value={name} onChange={event => setName(event.target.value)}/>
                        </div>
                    </div>
                    <button>Изменить</button>
                </div>
            }

        </div>
    );
};

export default EditNode;