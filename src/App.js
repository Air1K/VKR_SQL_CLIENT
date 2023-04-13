import React, {useContext, useEffect} from 'react';
import styles from './style/main/style-main.module.sass'


import {BrowserRouter} from "react-router-dom";
import Authorization from "./component/autorization/autorization";
import './style/style.sass'
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import RouterCustom from "./rout/route";

const App = ()=> {
    console.log("Рендер App____________________________________")
    const {store} = useContext(Context);
    console.log(store.user.role)
    useEffect( ()=> {
        async function check(){
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
        }
        check();

    }, [])
    return (
        <div className={styles.app}>
            <BrowserRouter>
                {store.user.role ? <RouterCustom/> : <Authorization/>}
            </BrowserRouter>

        </div>
    );
};
export default observer(App);
