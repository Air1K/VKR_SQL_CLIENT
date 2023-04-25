import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import styles from "./stylesRouteMap.module.sass"
const RouteMap = ({active, activeVariants, setActiveVariants}) => {
    const {store} = useContext(Context);
    const [class_styles, setClassStules] =useState('')
    function onClickEvent(id_state, el_id){
        setActiveVariants(el_id)
            if(id_state === 1){
                setClassStules(styles.active_optimal)
            }else{
                setClassStules(styles.active_no_optimal)
            }

    }
    return (
        <table>
            <tr><th>№</th><th>Имя</th><th>Границы маршрута</th><th>Длина</th><th>Кол-во узлов</th><th>Статус</th><th>Дата формирования</th></tr>
            {
                store.Routes[active].variants_route.map((route, index)=>
                    <tr key={index} className={activeVariants === index ? `${styles.string} ${class_styles}` : styles.string} style={route.id_state === 1 ? {backgroundColor: "rgba(75,154,75,0.58)"}: {}} onClick={(e)=>{onClickEvent(route.id_state, index)}}><td>{route.id_variants}</td><td>{store.Routes[active].name}({index})</td><td>{store.Routes[active].A} and {store.Routes[active].B}</td><td>{route.long} м.</td><td>{route.interval_node.length}</td><td>{route.id_state === 1 ? ("Оптимальный"):("Не оптимальный")}</td><td>{new Date(store.Routes[active].date).toLocaleString()}</td></tr>
                )
            }
        </table>
    );
};

export default RouteMap;