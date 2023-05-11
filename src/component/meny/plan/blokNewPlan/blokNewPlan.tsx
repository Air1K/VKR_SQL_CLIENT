import React, {memo, useContext, useState} from 'react';
import {Context} from "../../../../index";
const BlokNewPlan = ({setVisible}) => {
    console.log("Рендер blockNewPlan ____________________________________")

    const [name_plan, setNamePlan] = useState('')
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
                    <button onClick={()=>{ store.setPlanAdd(name_plan); setNamePlan(''); setVisible(false)}}>Создать план</button>
                </div>
            </div>
            <div>
                <br/>
                <h6>
                    Изменение плана
                </h6>
                <div>
                    <br/>
                    Старое название плана:
                    <input type="text" placeholder="Старое название плана" value={name_plan} onChange={event => setNamePlan(event.target.value)} />
                    Новое название плана:
                    <input type="text" placeholder="Новое название плана" value={name_plan} onChange={event => setNamePlan(event.target.value)} />
                    <button onClick={()=>{ store.setPlanAdd(name_plan); setNamePlan(''); setVisible(false)}}>Изменить план</button>
                </div>
            </div>
        </div>
    );
};

export default memo(BlokNewPlan);