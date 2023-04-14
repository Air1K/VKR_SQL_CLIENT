import React, {useContext} from 'react';
import styles from "./styleAreaAndZone.module.sass";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";

const RotationJoin = ({line, active, lineActive, ves}) => {
    const {store} = useContext(Context);
    return (
        <div>
            {
                store.Rotation.map((rotation, id) =>
                    line ? <div key={id} className={styles.line} style={{
                        width: rotation.long + "px",
                        transform: "translateX(" + rotation.centerX + "px) translateY(" + rotation.centerY + "px) rotate(" + rotation.rotations + "deg)"
                    }}>
                        <div className={styles.lineVisible} style={active?lineActive(rotation):{}}></div>
                        {ves ? <div style={{
                            transform: "rotate(" + -rotation.rotations + "deg)",
                            position: "absolute",
                            zIndex: 9999
                        }}>{store?.matrixsmesh[rotation?.idA][rotation?.idB]}</div> : null}

                    </div> : null
                )
            }
        </div>
    );
};

export default observer(RotationJoin);