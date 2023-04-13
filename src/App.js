import React, {useContext, useEffect, useState} from 'react';
import styles from './style/main/style-main.module.sass'
import Main from './component/main'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Authorization from "./component/autorization/autorization";
import VvodPlana from "./component/vvodPlana";
import NewComponentMain from "./component/newComponentMain";
import Search from "./component/meny/search/search";
import Otchet from "./component/meny/otchet/otchet";
import './style/style.sass'
import MyModal from "./component/meny/myModal/myModal";
import SearchRout from "./component/searchRout";
import PlanSklad from "./component/warehouse_manager/plan_stock/plan_sklad";
import Analitics from "./component/warehouse_manager/analytics/analitics";
import List_rout from "./component/warehouse_manager/list_rout/list_rout";
import ListRout from "./component/warehouse_manager/list_rout/list_rout";
import {observer} from "mobx-react-lite";
import {Context} from "./index";

const App = observer(()=> {
    console.log("Рендер App____________________________________")
    const {store} = useContext(Context);
    // const [roles, setRoles] = useState(store.user.role);
    useEffect( ()=> {
        async function check(){
            if(localStorage.getItem('token')){
                await store.checkAuth();
                if(store.isAuth){
                    await store.getStock();
                }
                await store.update();
            }
        }
        check();

    }, [])
    useEffect(() => {
        // setRoles(store.user.role)
    }, [store.stock_active, store.user.role])
    const Role = observer(() => {

        if (store.user?.role === 'storekeeper') {
            return (
                <Routes>
                    <Route path="" element={<NewComponentMain/>}/>
                    <Route path="authorization" element={<Authorization/>}/>
                    <Route path="main" element={<Main/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/search" : "main/search"} element={<SearchRout/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/plan" : "main/plan"} element={<VvodPlana/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/otchet" : "main/otchet" } element={<Otchet/>}/>
                </Routes>
            )
        }
        if (store.user?.role === 'Warehouse_Manager') {
            return (

                <Routes>
                    <Route path="" element={<NewComponentMain/>}/>
                    <Route path="authorization" element={<Authorization/>}/>
                    <Route path="main" element={<Main/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/plan_status" : "main/plan_status"} element={<PlanSklad/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/list" : "main/list"} element={<ListRout/>}/>
                    <Route path={store.stock_active ? "main/plan/" + store.plan[store.stock_active-1]?.name + "/analytics" : "main/analytics"} element={<Analitics/>}/>
                </Routes>

            )
        }
        if (store.user?.role === undefined) {
            return (


                <Routes>
                    <Route path="" element={<NewComponentMain/>}/>
                    <Route path="authorization" element={<Authorization/>}/>
                    <Route path="main" element={<Main/>}/>
                </Routes>

            )
        }
    })
    return (
        <div className={styles.app}>
            <BrowserRouter>
                {store.isAuth ? <Role/> : <Authorization/>}
            </BrowserRouter>

        </div>
    );
});
export default App;
