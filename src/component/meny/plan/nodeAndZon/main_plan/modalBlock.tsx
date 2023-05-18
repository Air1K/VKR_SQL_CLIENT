import React, {useContext, useEffect} from 'react';
import MyModal from "../../../myModal/myModal";
import EditZone from "../areaNodeAndZon/zone/editZone";
import EditNode from "../areaNodeAndZon/areaMotion/editNode";
import styles from "../../../../autorization/stuleAuth.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../../../index";
import {observer} from 'mobx-react-lite'

const ModalBlock = ({activeEditZone, setActiveEditZone, activeEditNode, setActiveEditNode}) => {
    const {store} = useContext(Context);
    useEffect(() => {
        console.log(store.messages)
    }, [store.messages])
    return (
        <div>

            {activeEditZone &&
                <div>

                    <MyModal visible={activeEditZone} setVisible={setActiveEditZone}>
                        {store.messages&& <div className={styles.allError} style={{color: 'red'}}>
                            <FontAwesomeIcon icon={faTriangleExclamation}/> {store.messages}</div>}
                        {activeEditZone && <EditZone/> }
                    </MyModal>
                </div>}
            {activeEditNode && <MyModal visible={activeEditNode} setVisible={setActiveEditNode}>
                {activeEditNode && <EditNode/>}
            </MyModal>}
        </div>
    );
};

export default observer(ModalBlock);