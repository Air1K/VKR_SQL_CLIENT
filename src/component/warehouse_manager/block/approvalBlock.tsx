import React from 'react';
import styles from '../../meny/plan/nodeAndZon/inputBlock/stylesBlock.module.sass'

const ApprovalBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.oknovvoda}>
                <h6>Утверждение склада</h6>
                <input type="text"/>
                Выберите склад:
                <select className="browser-default" style={{
                    backgroundColor: "rgb(255 255 255 / 0%)",
                    border: '1px solid #f2f2f200',

                }}>
                </select>
            </div>
        </div>
    );
};

export default ApprovalBlock;