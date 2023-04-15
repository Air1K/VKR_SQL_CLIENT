import React, { useContext, useRef, useState} from 'react';
import styles from './styleAreaAndZone.module.sass'
import {Context} from "../../../../../index";
import AreaMotion from "./areaMotion/areaMotion";
import Zone from "./zone/zone";
import PanelLeft from "./zone/panelLeft/panelLeft";
import {observer} from "mobx-react-lite";
import RotationJoin from "./RotationJoin";


const AreaNodeAndZone = ({obj, objCache, myModalZone, setMyModalZone, edit, activeId, active}) => {
    console.log("Рендер AreaNodeAndZone ____________________________________")


    const {store} = useContext(Context);
    console.log("Перезапись")
    const parentRef = useRef<HTMLDivElement>(null)
    const [checkDrag, setCheckDrag] = useState(false)
    const [ves, setVes] = useState(true)
    const [zone, setZone] = useState(false)
    const [line, setLine] = useState(true)
    const [nameVisible, setNameVisible] = useState(true)
    const [idVisible, setIdVisible] = useState(true)
    const [imgFon, setImgFon] = useState('');
    const [draggableEl, setDraggableEl] = useState(true)
    const [visibleZon, setVisibleZon] = useState('50')

    let offseteNode = []
    for (let j = 0; j < store.idGraph.length; j++) {
        offseteNode[j] = {
            id: j,
            Xoffs: 0,
            Yoffs: 0,
        }
    }
    let cash_1 = [];
    for (let i = 0; i < store.Rotation.length; i++) {
        cash_1.push({
            idA: store.Rotation[i].idA,
            idB: store.Rotation[i].idB,
            centerX: store.Rotation[i].centerX,
            centerY: store.Rotation[i].centerY,
            long: store.Rotation[i].long,
            rotations: store.Rotation[i].rotations,
        })
    }

    console.log("Рендер areaNodeAndZone")


    const editNodeDreag = (info, id) => {

        offseteNode[id].Xoffs = info.offset.x;
        offseteNode[id].Yoffs = info.offset.y;
        objCache[id].X = obj[id].X + offseteNode[id].Xoffs;
        objCache[id].Y = obj[id].Y + offseteNode[id].Yoffs;
        console.log(objCache[id].X, "info", objCache[id].Y);
        console.log(obj)
        return;
    }

    function editNodeDragF(id) {
        obj[id].X = offseteNode[id].Xoffs + obj[id].X;
        obj[id].Y = offseteNode[id].Yoffs + obj[id].Y;
        store.editGraph(obj);
    }


    const editNodeDreagEnd = (info, id) => {

        editNodeDragF(id)
    }





    return (
        <div className={styles.main_app}>
            <div ref={parentRef} className={styles.mainAreaNodeAndZon}>
                <div className={styles.img_container}>
                    <img className={styles.img} src={ imgFon ? imgFon : `${store.plan[store.stock_active-1]?.url}`} alt=""/>
                </div>

                <AreaMotion
                    parentRef={parentRef}
                    editNode={editNodeDreag}
                    editNodeEnd={editNodeDreagEnd}
                    checkDrag={checkDrag}
                    nameVisible={nameVisible}
                    idVisible={idVisible}
                    activeId={activeId}
                    active={active}
                />

                <RotationJoin line={line} active={active} ves={ves}/>

                <Zone
                    draggableEl={draggableEl}
                    visibleZon={visibleZon}
                    zon={zone}
                />
                <PanelLeft visibleZon={visibleZon}
                           setVisibleZon={setVisibleZon}
                           setImgFon={setImgFon}
                           draggableEl={draggableEl}
                           setDraggableEl={setDraggableEl}
                           zone={zone}
                           setZone={setZone}
                           checkDrag={checkDrag}
                           setCheckDrag={setCheckDrag}
                           ves={ves}
                           setVes={setVes}
                           line={line}
                           setLine={setLine}
                           idVisible={idVisible}
                           setIdVisible={setIdVisible}
                           nameVisible={nameVisible}
                           setNameVisible={setNameVisible}
                           edit={edit}/>
            </div>

        </div>

    );
};

export default observer(AreaNodeAndZone);