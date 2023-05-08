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
                        activeRout,
                        activeId,
                        active
                    }) => {
    console.log("Рендер areaMotion ____________________________________")
    const controls = useDragControls()
    const {store} = useContext(Context);

    // const deleteProduct = (product) => {
    //     setStack(stack.filter(p => p !== product));
    // };
    // useEffect(()=>{
    //     if(active){
    //         setStack([])
    //         let copy = Object.assign([], store.Routes[activeRout].variants_route[activeId].interval_node);
    //         setStack(copy)
    //     }
    // },[activeId, activeRout, active])
    const classStyle = (ids) => {
        console.log(active, "================")

        if ((store.idGraph[ids].num === store.Routes[activeRout]?.A) || (store.idGraph[ids].num === store.Routes[activeRout]?.B)) {
            return {backgroundColor: "#27d527"}
        }
        if (store.route_active[activeId]?.includes(ids)){
            return {backgroundColor: "green"}
        }


        // if (ids === store.mass_putei_exit[activeId]?.A && active) {
        //     return {backgroundColor: "green"}
        // }
        // if (ids === store.mass_putei_exit[activeId]?.B) {
        //     return {backgroundColor: "green"}
        // }
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
                        onDrag={ (event, info) => {
                            // if(info.velocity.x !== stateX && info.velocity.y !== stateY){
                                editNode(info, ids);

                                // stateX = info.velocity.x
                                // stateY = info.velocity.y
                            // }
                        }}
                        whileTap={{boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", cursor: "grabbing"}}
                        onDragEnd={async (event, info) => {
                            await editNodeEnd(info, ids);
                            await store.dragGraph(ids);
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