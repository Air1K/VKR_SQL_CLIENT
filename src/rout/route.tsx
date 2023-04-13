import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Navigate, Route, Routes} from "react-router-dom";
import NewComponentMain from "../component/newComponentMain";
import Authorization from "../component/autorization/autorization";
import Main from "../component/main";
import SearchRout from "../component/searchRout";
import VvodPlana from "../component/vvodPlana";
import Otchet from "../component/meny/otchet/otchet";
import PlanSklad from "../component/warehouse_manager/plan_stock/plan_sklad";
import ListRout from "../component/warehouse_manager/list_rout/list_rout";
import Analitics from "../component/warehouse_manager/analytics/analitics";



const RouterCustom = observer( () => {
    const {store} = useContext(Context);
    console.log("Рендер Route____________________________________")
    console.log(store.stock_active)

    if (store.user.role === 'storekeeper') {
        return (
            <Routes>
                <Route path="" element={<Navigate to={'/main'} />}/>
                <Route path="authorization" element={<Authorization/>}/>
                <Route path="main" element={<Main/>}/>
                <Route path={`main/plan/${store.plan[store.stock_active-1]?.name}/search`} element={<SearchRout/>}/>
                <Route path={`main/plan/${store.plan[store.stock_active-1]?.name}/plan`} element={<VvodPlana/>}/>
                <Route path={`main/plan/${store.plan[store.stock_active-1]?.name}/otchet`} element={<Otchet/>}/>
            </Routes>
        )
    }
    if (store.user.role === 'Warehouse_Manager') {
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
    return null
})

export default RouterCustom;