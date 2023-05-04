import React, {useContext, useEffect, useState} from 'react';
import styles from "./styleAreaAndZone.module.sass";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";

const RotationJoin = ({line, active, ves, activeRout, activeId}) => {
    const {store} = useContext(Context);

    const lineActive = (rotation)=>{
        for(let i =0; i<store.route_active[activeId]?.length; i++){
            if(((rotation.idA === store.route_active[activeId]?.[i]) && (rotation.idB === store.route_active[activeId]?.[i+1])) || ((rotation.idB === store.route_active[activeId]?.[i]) && (rotation.idA === store.route_active[activeId]?.[i+1]))){
                return {backgroundColor: 'green'}
            }
        }
    }
    return (
        <div>
            {
                line ? store.Rotation.map((rotation, id) =>
                     <div key={id} className={styles.line} style={{
                        width: rotation.long + "px",
                        transform: "translateX(" + rotation.centerX + "px) translateY(" + rotation.centerY + "px) rotate(" + rotation.rotations + "deg)"
                    }}>

                        <div style={active?lineActive(rotation):{}} className={styles.lineVisible} ></div>
                        {ves ? <div style={{
                            transform: "rotate(" + -rotation.rotations + "deg)",
                            position: "absolute",
                            zIndex: 9999
                        }}>{store?.matrixsmesh[rotation?.idA][rotation?.idB]}</div> : null}

                    </div>
                ): null
            }
        </div>
    );
};

export default observer(RotationJoin);