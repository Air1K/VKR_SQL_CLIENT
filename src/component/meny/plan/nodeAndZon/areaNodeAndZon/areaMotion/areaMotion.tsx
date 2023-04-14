import React, {useContext, useEffect, useState} from 'react';
import styles from "../styleAreaAndZone.module.sass";
import {motion, useDragControls} from "framer-motion";
import {Context} from "../../../../../../index";


const AreaMotion = ({
                        parentRef,
                        editNode,
                        editNodeEnd,
                        checkDrag,
                        nameVisible,
                        idVisible,
                        activeId,
                        active
                    }) => {
    console.log("Рендер areaMotion ____________________________________")

    const controls = useDragControls()
    const {store} = useContext(Context);

    const classStyle = (ids) => {
        if (ids === store.mass_putei_exit[activeId]?.A && active) {
            return {backgroundColor: "green"}
        }
        if (ids === store.mass_putei_exit[activeId]?.B) {
            return {backgroundColor: "green"}
        }
    }
    return (
        <div>
            {
                store.idGraph.map((graph, ids) =>

                    <motion.div
                        key={graph.num}
                        drag
                        dragListener={checkDrag}
                        dragMomentum={false}
                        dragElastic={.5}
                        onDrag={(event, info) => {
                            editNode(info, ids);
                        }}
                        whileTap={{boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", cursor: "grabbing"}}
                        onDragEnd={(event, info) => {
                            editNodeEnd(info, ids);
                        }}
                        dragControls={controls}
                        dragConstraints={parentRef}
                        className={styles.node_main}
                        initial={{y: graph.Y, x: graph.X}}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                transition: {duration: 0.1},
                            }}
                            style={active ? classStyle(ids) : {}}
                            className={styles.node}>

                            <div className={styles.idVisible}>{idVisible ? (ids) : null}</div>
                            <div className={styles.numNode}>
                                {nameVisible ? (graph.num) : null}
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }
        </div>
    );
};

export default AreaMotion;