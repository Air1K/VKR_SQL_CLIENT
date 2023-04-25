import React, {useContext, useEffect, useState} from 'react';
import styles from "./styleAreaAndZone.module.sass";
import {Context} from "../../../../../index";
import searchRouteDb from '../../../../hooks/hooks-search-route-db'
import {observer} from "mobx-react-lite";

const RotationJoin = ({line, active, ves, activeRout, activeId}) => {
    const {store} = useContext(Context);
    const [rout, setRout] = useState([])
    // console.log(searchRouteDb(store.idGraph, store.matrixsmesh, 8, 18, store?.Routes[activeRout]?.variants_route[activeId]))

    // searchRouteDb(store.idGraph, store.matrixsmesh, 8, 18, store?.Routes[activeId]?.variants_route[activeVariants])
    // const lineActive = (rotation)=>{
    //     for(let i =0; i<store.mass_putei_exit[activeId]?.interval_node.length; i++){
    //         if(((rotation.idA === store.mass_putei_exit[activeId]?.interval_node[i]) && (rotation.idB === store.mass_putei_exit[activeId]?.interval_node[i+1])) || ((rotation.idB === store.mass_putei_exit[activeId]?.interval_node[i]) && (rotation.idA === store.mass_putei_exit[activeId]?.interval_node[i+1]))){
    //             return {backgroundColor: 'green'}
    //         }
    //     }
    // }
    return (
        <div>
            {
                line ? store.Rotation.map((rotation, id) =>
                     <div key={id} className={styles.line} style={{
                        width: rotation.long + "px",
                        transform: "translateX(" + rotation.centerX + "px) translateY(" + rotation.centerY + "px) rotate(" + rotation.rotations + "deg)"
                    }}>
                         {/*style={active?lineActive(rotation):{}}*/}
                        <div className={styles.lineVisible} ></div>
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