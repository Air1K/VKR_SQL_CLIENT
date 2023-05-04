import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import styles from './stylesSearch.module.sass'
import AreaNodeAndZone from "../plan/nodeAndZon/areaNodeAndZon/areaNodeAndZone";
import Selected from "../../tag/select/select";
import {observer} from "mobx-react-lite";
import DateTime from "../../hooks/hooks-time"
import searchRouteDb from '../../hooks/hooks-search-route-db'
import RouteMap from "./RouteMap";

const Search = observer(() => {
    console.log("Рендер Search ____________________________________")
    const [date, setDate] = useState(`${DateTime}`)
    const {store} = useContext(Context);
    const [G1, setG1] = useState('')
    const [G2, setG2] = useState('')

    const edit = false
    const [render_line, setRender_line] = useState(false);
    const [editNodeS, setEditNodeS] = useState(false);
    const [myModalZone, setMyModalZone] = useState(false)
    const [name_route, setNameRoute] = useState('')
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
        setRender_line(true)
        setMyModalZone(true)
    })

    useEffect(() => {
        store.getRoutes()
    }, [])


    // const Strelka = (props) => {
    //     const index_ = props.ellement;
    //     console.log(index_, store.mass_putei_exit.length - 1)
    //     if (index_ < store.mass_putei_exit[activeId]?.interval_node?.length - 1) {
    //         return (<span>➜</span>)
    //     }
    //     return null;
    // }
    //
    // const Otvet = () => {
    //
    //     if (store.b != null) {
    //         console.log(store.mass_putei_exit)
    //         return (<span> &nbsp; {store.mass_putei_exit[activeId]?.long}</span>)
    //     }
    //     return null;
    // }

    useEffect(()=>{
        if(activeId !== null){
            console.log("setActive(true) ++++------++++-----------++++--------------- ++++")
            setActive(true)
        }else{
            console.log("setActive(false) ++++------++++-----------++++--------------- ++++")
            setActive(false)
        }
    }, [activeId])

    useEffect(()=>{
        // searchRouteDb(store.idGraph, store.matrixsmesh, 8, 18, store?.Routes[activeId]?.variants_route[activeVariants].interval_node)
        console.log(activeVariants)
    }, [activeVariants])

    return (
        <div className={styles.block}>
            <div className={styles.main}>
                <h5>Поиск маршрута</h5>
                Введите краткое название для маршрута
                <input type="text" name={name_route} id="" onChange={event => setNameRoute(event.target.value)}
                       placeholder='Краткое название маршрута'/>
                Введите начальную точку
                <input type="text" value={G1} onChange={event => setG1(event.target.value)}
                       placeholder="Введите первый граф"/>
                Введите конечную точку
                <input type="text" value={G2} onChange={event => setG2(event.target.value)}
                       placeholder="Введите второй граф"/>
                Дата и время формирования
                <input type="datetime-local" value={date} onChange={event => setDate(event.target.value)}/>
                <button onClick={async () => {

                    await store.search(G1, G2, name_route, date);
                    console.log(" ++++------++++-----------++++--------------- ++++")
                    setActive(true)
                }}>Найти
                </button>
            </div>
            <div className={styles.main}>
                <div className={styles.search_div}>
                    <div style={{marginTop: "16px"}}>Выберите кротчайший маршрут: &nbsp; &nbsp;</div>
                    <div className={styles.select}>
                        <Selected setActive={setActiveID}
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
                                <RouteMap active={activeId} activeVariants={activeVariants} setActiveVariants={setActiveVariants}/>
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

export default Search;