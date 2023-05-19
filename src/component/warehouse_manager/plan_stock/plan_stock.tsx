import React from 'react';
import styles from '../../meny/plan/nodeAndZon/main_plan/stylesNodeAndConnect.module.sass'
import ApprovalBlock from "../block/approvalBlock";
import InfoSklad from '../block/infoSklad/infoSklad';
import RouteStockApproval from "../block/routeStockApproval";
const PlanStock = () => {
    return (
        <div className={styles.mainNodeAndConnect}>
            <div className={styles.componentNodeAndConnect} style={{width:" 1139px"}}>
                <InfoSklad/>
                <RouteStockApproval/>
                <ApprovalBlock/>
            </div>
        </div>
    );
};

export default PlanStock;