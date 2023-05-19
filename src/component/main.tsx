import React, {useContext, useState, memo, useEffect} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import './main_style.sass'
import Fon from '../img/uborka-sklada-form2.jpg'
import styles from './stylesMain_2.module.sass'
import MyModal from "./meny/myModal/myModal";
import BlokNewPlan from "./meny/plan/blokNewPlan/blokNewPlan";
import NewZone from "./meny/plan/newZone/newZone";
import {observer} from "mobx-react-lite";
import SelectMain from './tag/selectMAin/SelectMain'
import NewUnits from "./meny/plan/newUnitstype/NewUnits";

const Main = observer(() => {
    console.log("Рендер main ____________________________________")
    const {store} = useContext(Context);
    console.log(store.stock_active)
    const [visible, setVisible] = useState(false)
    const [visibleZon, setVisibleZon] = useState(false)
    const [visibleUnits, setVisibleUnits] = useState(false)

    useEffect(()=>{
        async function getPlan(){
            if(store.stock_active !== null){
                await store.getNodeAndZone();
            }

        }
        getPlan()
    }, [store.stock_active])

    const RoleFunck = () => {
        if (store.user.role === 'storekeeper') {

            return (
                <div className={styles.div_main}>
                    <nav role="navigation" className="primary-navigation">
                        <ul>
                            <li><a href="#" data-hover="Сформировать план склада">План склада</a>
                                <ul className="dropdown">
                                    <li><a href="#" onClick={() => {
                                        setVisible(true)
                                    }}>Создать / изменить план</a></li>
                                    <li><Link to={`plan/${store.plan[store.stock_active - 1]?.name}/plan`}>Конструктор склада</Link></li>
                                    <li><a href="#" onClick={() => {
                                        setVisibleZon(true)
                                    }}>Тип зоны</a></li>
                                    <li><a href="#" onClick={() => {
                                        setVisibleUnits(true)
                                    }}>Единицы измерения</a></li>
                                </ul>
                            </li>
                            <li><Link to={`plan/${store.plan[store.stock_active - 1]?.name}/search`}
                                      data-hover="Найти оптимальный маршрут">Оптимальный маршрут</Link></li>
                            <li><Link to={`plan/${store.plan[store.stock_active - 1]?.name}/otchet`}
                                      data-hover="Сформировать отчет">Визуализация маршрута</Link></li>
                            <li><Link to="/authorization" data-hover="Exit" onClick={async () => {
                                await store.logoutE()
                            }}>Выйти из системы</Link></li>
                            <li style={{height: "64px"}} className={styles.div_li}>
                                <SelectMain/>
                            </li>
                        </ul>

                    </nav>

                </div>)
        }
        if (store.user.role === 'warehouse_manager') {
            return (

                <div className={styles.div_main}>

                    <nav role="navigation" className="primary-navigation">

                        <ul>
                            <li><Link to={`plan/${store.plan[store.stock_active - 1]?.name}/approval`}
                                      data-hover="List">Утверждение плана</Link></li>
                            <li><Link to="/authorization" data-hover="Exit" onClick={() => {
                                store.logoutE()
                            }}>Выйти из системы</Link></li>
                            <li style={{height: "64px"}} className={styles.div_li}>
                                <SelectMain/>
                            </li>
                        </ul>

                    </nav>

                </div>
            )
        }
        return (<div></div>)
    }

    return (
        <div className={styles.main}>
            {visible&&
            <MyModal visible={visible} setVisible={setVisible}>
                <BlokNewPlan setVisible={setVisible}/>
            </MyModal>}
            {visibleZon&&
            <MyModal visible={visibleZon} setVisible={setVisibleZon}>
                <NewZone setVisible={setVisibleZon}/>
            </MyModal>}
            {visibleUnits&&
            <MyModal visible={visibleUnits} setVisible={setVisibleUnits}>
                <NewUnits setVisible={setVisibleUnits}/>
            </MyModal>}

            <div className={styles.img}></div>
            <div className={styles.fon}>
                <h2 style={{textAlign: "center", margin: 0}}>Главное окно АС"Складская логистика"</h2>
                <RoleFunck/>
            </div>
        </div>

    );
});

export default Main;