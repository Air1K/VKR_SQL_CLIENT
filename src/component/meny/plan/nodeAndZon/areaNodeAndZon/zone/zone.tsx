import React, {useState, useContext, useEffect, useRef} from 'react';
import styles from './stylesZone.module.sass'
import {Context} from "../../../../../../index";
import {motion, useDragControls} from "framer-motion";
import {observer} from "mobx-react-lite";

const Zone = ({ draggableEl,  visibleZon, zon}) => {
    console.log("Рендер Zone ____________________________________")

    const controls = useDragControls()
    const {store} = useContext(Context);

    const parent_Ref = useRef<HTMLDivElement>(null)
    const [classStyles_main, setClassStyles_main] = useState(styles.main)
    useEffect(()=>{
        if(zon){
            setClassStyles_main(styles.main)
        }else{
            setClassStyles_main(styles.main + ' ' + styles.main_zonEdit)
        }

    },[zon])

    return (
        <div ref={parent_Ref}
             className={styles.area}>
            {(
                store.sizeZon.map((zone, id) =>
                    <motion.div
                        key={id}
                        drag
                        dragListener={draggableEl && zon}
                        dragMomentum={false}
                        dragElastic={.5}
                        onClick={(e)=>{
                            if(!draggableEl){
                                const obj = {
                                    widtH: e.currentTarget.offsetWidth,
                                    heighT: e.currentTarget.offsetHeight,
                                }
                                store.setRead(obj, id, "size")
                                console.log()
                            }
                            if(draggableEl){
                                const parent = parent_Ref.current.getBoundingClientRect();
                                const element = e.currentTarget.getBoundingClientRect();

                                const x = element.left - parent.left;
                                const y = element.top - parent.top;

                                const obj = {
                                    toP: y,
                                    lefT: x,
                                }
                                store.setRead(obj, id, "position")
                            }

                        }}
                        whileTap={{boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", cursor: "grabbing"}}
                        dragControls={controls}
                        dragConstraints={parent_Ref}
                        className={classStyles_main}
                        style={{width: zone.widtH + "px", height: zone.heighT + "px"}}
                        initial={{y: zone.toP, x: zone.lefT}}
                    >
                        <div className={styles.content}>{zone.name}({store.type_zone[store.type_zone.findIndex(el => el.id_type_zone === zone.id_type_zone)].name})</div>
                        <div className={styles.main_absolute}
                        style={{backgroundColor: zone.color, opacity: visibleZon / 100}}>

                        </div>
                    </motion.div>
                )
            )}
        </div>


    );
};

export default observer(Zone);