import React from 'react';
import styles from './vvodPlanaStyle.module.sass'
import BackIco from "./tag/backIco";
import PlanMain from "./meny/plan/nodeAndZon/main_plan/plan_main";

const VvodPlana = () => {
    console.log("Рендер VvodPlana_КНОПКА назад ____________________________________")
    return (
        <div className={styles.main}>
            <BackIco/>
            <PlanMain/>
        </div>
    );
};

export default VvodPlana;