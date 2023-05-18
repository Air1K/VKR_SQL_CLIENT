import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import styles from "../../../autorization/stuleAuth.module.sass";
const BlokNewPlan = ({setVisible}) => {
    console.log("Рендер blockNewPlan ____________________________________")

    const [name_plan, setNamePlan] = useState('')
    const [name_old_plan, setName_old_plan] = useState('')
    const [name_new_plan, setName_new_plan] = useState('')
    // const [errorNameOld, setErrorNameOld] = useState("Введено не существующее значение")
    const {store} = useContext(Context);

    return (
        <div>
            <div>
                <h6>
                    Создание плана
                </h6>
                <div>
                    <br/>
                    Название плана:
                    <input type="text" placeholder="Название плана" value={name_plan} onChange={event => setNamePlan(event.target.value)} />
                    <button onClick={()=>{ if(name_plan ==='') return alert("Ошибка! Поле (Название плана) не заполнено"); store.setPlanAdd(name_plan); setNamePlan(''); setVisible(false)}}>Создать план</button>
                </div>
            </div>
            <div>
                <br/>
                <h6>
                    Изменение плана
                </h6>
                <div>
                    <br/>
                    {0 && <div className={styles.password_error_block} style={{color: 'red'}}>
                        <div><FontAwesomeIcon icon={faTriangleExclamation}/> Имя склада "Склад_12" не существует</div>
                    </div>}
                    Старое название плана:
                    <input type="text" placeholder="Старое название плана" value={name_old_plan} onChange={event => setName_old_plan(event.target.value)} />
                    Новое название плана:
                    <input type="text" placeholder="Новое название плана" value={name_new_plan} onChange={event => setName_new_plan(event.target.value)} />
                    <button onClick={()=>{  setVisible(false)}}>Изменить план</button>
                </div>
            </div>
        </div>
    );
};

export default memo(BlokNewPlan);