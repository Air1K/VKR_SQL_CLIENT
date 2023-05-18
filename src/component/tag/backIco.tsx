import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import styless from '../../app.module.sass'
import {Link} from "react-router-dom";
import {Context} from "../../index";

const BackIco = () => {
    console.log("Рендер BackIco_КНОПКА____________________________________")
    const {store} = useContext(Context);
    return (
        <div className={styless.container}>
            <Link className={styless.a_ico} to = "/main" onClick={()=>{store.setMessages('')}}>
                <FontAwesomeIcon className={styless.ico} icon={faChevronLeft} />
            </Link>
        </div>
    );
};

export default BackIco;