import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../index";
import styles from "../../../autorization/stuleAuth.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

const Approval = ({setVisible}) => {
    console.log("Рендер Approval ____________________________________")

    const [name, setName] = useState('')
    const [name_old_plan, setName_old_plan] = useState('')
    const [name_new_plan, setName_new_plan] = useState('')
    // const [errorNameOld, setErrorNameOld] = useState("Введено не существующее значение")
    const {store} = useContext(Context);

    const editFunk = async ()=>{
        if((name_new_plan ==='')||(name_new_plan==='')) return alert("Ошибка! Обнаружены не заполненные поля");
        await store.setEditApproval(name_old_plan, name_new_plan);
        setVisible(false)
    }
    useEffect(()=>{
        return ()=>{
            setName_new_plan('');
            setName_old_plan('');
        }
    }, [])
    return (
        <div>
            <div>
                <h6>
                    Создание утверждения
                </h6>
                <div>
                    <br/>
                    Название утверждения:
                    <input type="text" placeholder="Название утверждения" value={name} onChange={event => setName(event.target.value)} />
                    <button onClick={()=>{ if(name ==='') return alert("Ошибка! Поле (Название утверждения) не заполнено"); store.setApproval(name); setName(''); setVisible(false)}}>Создать утверждение</button>
                </div>
            </div>
            <div>
                <br/>
                <h6>
                    Изменение утверждения
                </h6>
                <div>
                    <br/>
                    {store.messages && <div className={styles.password_error_block} style={{color: 'red'}}>
                        <div><FontAwesomeIcon icon={faTriangleExclamation}/> Имя склада "Склад_12" не существует</div>
                    </div>}
                    Старое название утверждения:
                    <input type="text" placeholder="Старое название утверждения" value={name_old_plan} onChange={event => setName_old_plan(event.target.value)} />
                    Новое название утверждения:
                    <input type="text" placeholder="Новое название утверждения" value={name_new_plan} onChange={event => setName_new_plan(event.target.value)} />
                    <button onClick={()=>{ editFunk() }}>Изменить утверждение</button>
                </div>
            </div>
        </div>
    );
};

export default Approval;