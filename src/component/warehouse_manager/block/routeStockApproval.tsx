import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import styles from "../../meny/search/stylesSearch.module.sass";
import Selected from "../../tag/select/select";
import RouteMap from "../../meny/search/RouteMap";
import AreaNodeAndZone from "../../meny/plan/nodeAndZon/areaNodeAndZon/areaNodeAndZone";
import {observer} from 'mobx-react-lite'

const RouteStockApproval = observer(() => {
    const {store} = useContext(Context);

    const edit = false
    const [myModalZone, setMyModalZone] = useState(false)
    const [activeId, setActiveID] = useState(null);
    const [active, setActive] = useState(false);
    const [activeVariants, setActiveVariants] = useState(null);
    let obj = []
    let objCache = []

    useEffect(() => {
        for (let j = 0; j < store.idGraph.length; j++) {
            objCache[j] = {
                id: j,
                X: store.idGraph[j].X,
                Y: store.idGraph[j].Y,
                // rotation: store.idGraph[j].rotation
            }
        }
        for (let j = 0; j < store.idGraph.length; j++) {
            obj[j] = {
                id: j,
                X: store.idGraph[j].X,
                Y: store.idGraph[j].Y,
                num: store.idGraph[j].num
            }
            console.log("Джопа")

        }
        setMyModalZone(true)
    })
    useEffect(() => {
        if (activeId !== null) {
            console.log("setActive(true) ++++------++++-----------++++--------------- ++++")
            setActive(true)
        } else {
            console.log("setActive(false) ++++------++++-----------++++--------------- ++++")
            setActive(false)
        }
    }, [activeId])
    useEffect(() => {
        store.getRoutes()
    }, [])
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.search_div}>
                    <div style={{marginTop: "16px"}}>Выберите кротчайший маршрут: &nbsp; &nbsp;</div>
                    <div className={styles.select}>
                        <Selected active={null}
                                  setActive={setActiveID}
                                  nameLabel={"Кротчайший маршрут"}
                                  objMap={store.Routes}
                                  ID={"id"}/>
                    </div>

                </div>
                <h5>Сводка о маршруте {activeId !== null ? ('"' + store.Routes[activeId]?.name + '"') : (null)}</h5>
                <div className={styles.stringLable}>

                    {activeId !== null ? (
                        <div style={{display: "block"}}>
                            <div>
                                <span>Найденые маршруты: </span>
                                <RouteMap active={activeId} activeVariants={activeVariants}
                                          setActiveVariants={setActiveVariants}/>
                                <br/>
                            </div>
                            {/*<div>*/}
                            {/*    <span>Маршрут: </span> &nbsp;*/}
                            {/*    {(store.mass_putei_exit[activeId]?.interval_node?.map((node_, indexe) => <span*/}
                            {/*        className={styles.puti} key={indexe}> {store.idGraph[node_]?.num}&nbsp; <Strelka*/}
                            {/*        ellement={indexe}/> &nbsp;</span>))}*/}
                            {/*</div>*/}

                        </div>
                    ) : (<div/>)}
                </div>
            </div>

            <AreaNodeAndZone
                obj={obj}
                objCache={objCache}
                myModalZone={myModalZone}
                setMyModalZone={setMyModalZone}
                edit={edit}
                activeRout={activeId}
                activeId={activeVariants}
                active={active} //active
            />
        </div>
    );
});

export default RouteStockApproval;