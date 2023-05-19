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
                <Route path={store.stock_active!==null ?`main/plan/${store.plan[store.stock_active-1]?.name}/search`: "NoRoute"} element={<SearchRout/>}/>
                <Route path={store.stock_active!==null ?`main/plan/${store.plan[store.stock_active-1]?.name}/plan`: "NoRoute"} element={<VvodPlana/>}/>
                <Route path={store.stock_active!==null ?`main/plan/${store.plan[store.stock_active-1]?.name}/otchet`: "NoRoute"} element={<Otchet/>}/>
            </Routes>
        )
    }
    //plan/${store.plan[store.stock_active - 1]?.name}/approval
    if (store.user.role === 'warehouse_manager') {
        return (

            <Routes>
                <Route path="" element={<NewComponentMain/>}/>
                <Route path="authorization" element={<Authorization/>}/>
                <Route path="main" element={<Main/>}/>
                <Route path={store.stock_active!==null ? `main/plan/${store.plan[store.stock_active-1]?.name}/approval`: "NoRoute"} element={<PlanSklad/>}/>
            </Routes>

        )
    }
    return null
})

export default RouterCustom;