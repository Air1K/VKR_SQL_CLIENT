import React, {useContext, useEffect, useState} from 'react';
import InputTochek from "../inputBlock/inputTochek";
import Area from "../area/area";
import Block from "../inputBlock/block";
import styles from './stylesNodeAndConnect.module.sass'
import AreaNodeAndZone from "../areaNodeAndZon/areaNodeAndZone";
import {Context} from "../../../../../index";
import MyModal from "../../../myModal/myModal";
import DellBlock from "../inputBlock/dellBlock";
import DellZone from "../areaNodeAndZon/zone/dellZone";
import {observer} from "mobx-react-lite";
import ModalBlock from "./modalBlock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faCheck, faRotate} from "@fortawesome/free-solid-svg-icons";

const PlanMain = () => {
    console.log("Рендер Plan_Main____________________________________")

    const {store} = useContext(Context);
    const edit = true
    const [myModal, setMyModal] = useState(false)
    const [myModalZone, setMyModalZone] = useState(false)
    const [name, setName] = useState([])
    const [visibleDell, setVisibleDell] = useState(false)
    const [activeEditZone, setActiveEditZone] = useState(false);
    const [activeEditNode, setActiveEditNode] = useState(false);
    let obj = []
    for (let j = 0; j < store.idGraph.length; j++) {
        obj[j] = {
            id: j,
            X: store.idGraph[j].X,
            Y: store.idGraph[j].Y,
            num: store.idGraph[j].num
        }
    }

    let objCache = []
    for (let j = 0; j < store.idGraph.length; j++) {
        objCache[j] = {
            id: j,
            X: store.idGraph[j].X,
            Y: store.idGraph[j].Y,
            // rotation: store.idGraph[j].rotation
        }
    }
    async function setFunc() {
        await setMyModal(true);
        setMyModal(false)
    }

    async function func_async() {
        if (name.length === 1) {
            await store.dellGraph(name?.[0]);
            await setFunc();
        }
        if (name.length === 2) {
            await store.matrixSmejUsel(name?.[0], name?.[1], 99999);
            await store.matrixAndZone();
            await setFunc();
        }
    }
    const BlockOtvetClassStyle = ()=>{

        switch (store.messages) {
            case 'Выполняется':
                return (<div className={styles.statusResponse} style={{color: "black", backgroundColor: "yellow"}}>
                    <div> <FontAwesomeIcon icon={faRotate} spin /> {store.messages}</div>
                </div>)
            case 'Сохранение прошло успешно!':
                return (<div className={styles.statusResponse} style={{color: "black", backgroundColor: "#3bd924c9"}}>
                    <div><FontAwesomeIcon icon={faCheck} /> {store.messages}</div>
                </div>)
            case 'Непредвиденная ошибка на сервере':
                return (<div className={styles.statusResponse} style={{color: "red", backgroundColor: "rgba(255, 204, 0, 0.72)"}}>
                    <div><FontAwesomeIcon icon={faXmark} /> {store.messages}</div>
                </div>)
        }
        return 'red'
    }
    return (
        <div className={styles.mainNodeAndConnect}>
            <div className={styles.componentNodeAndConnect}>
                <DellZone setActiveEditZone={setActiveEditZone}/>
                <InputTochek
                    setMyModal={setMyModal}
                    setName={setName}
                    setActiveEditNode={setActiveEditNode}/>
                <Block
                    setVisibleDell={setVisibleDell}
                />
                <div style={{padding: "5px", margin: "10px"}}>{store.messages && BlockOtvetClassStyle()}
                </div>
                <AreaNodeAndZone
                    obj={obj}
                    objCache={objCache}
                    myModalZone={myModalZone}
                    setMyModalZone={setMyModalZone}
                    edit={edit}
                    activeRout={null}
                    activeId={null}
                    active={false}
                />
                <div className={styles.checkboxAndButton}>
                    <p>
                        <button style={{backgroundColor: "#f4ff00"}} onClick={async () => {
                            await store.saveBd()
                        }}>Сохранить сформированные данные в БД
                        </button>
                    </p>
                </div>
                <Area/>
                {visibleDell && <MyModal visible={visibleDell} setVisible={setVisibleDell}>
                    <DellBlock setVisible={setVisibleDell} setMyModal={setMyModal} setName={setName}/>
                </MyModal>}
                {myModal && <MyModal visible={myModal} setVisible={setMyModal}>
                    <h6>Вы уверенны что хотите удалить {name.length === 1 ? <p>узел {name?.[0]}</p> :
                        <p>связь {name?.[0]} к {name?.[1]}</p>}</h6>
                    <button onClick={() => {
                        func_async();
                        setVisibleDell(false);
                    }}>Да
                    </button>
                    <button onClick={() => {
                        setMyModal(false);
                        console.log(name)
                    }}>Нет
                    </button>
                </MyModal>}
                <ModalBlock activeEditZone={activeEditZone} setActiveEditZone={setActiveEditZone}
                            activeEditNode={activeEditNode} setActiveEditNode={setActiveEditNode}/>
                {/*{myModalZone&&<MyModal visible={myModalZone} setVisible={setMyModalZone}>*/}
                {/*    <DellZone*/}
                {/*        setMyModalZone={setMyModalZone}*/}
                {/*    />*/}
                {/*</MyModal>}*/}
            </div>
        </div>
    );
};

export default observer(PlanMain);