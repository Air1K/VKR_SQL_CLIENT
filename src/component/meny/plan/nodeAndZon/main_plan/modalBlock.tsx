import React from 'react';
import MyModal from "../../../myModal/myModal";
import EditZone from "../areaNodeAndZon/zone/editZone";
import EditNode from "../areaNodeAndZon/areaMotion/editNode";

const ModalBlock = ({activeEditZone, setActiveEditZone, activeEditNode, setActiveEditNode}) => {
    return (
        <div>

            {activeEditZone && <MyModal visible={activeEditZone} setVisible={setActiveEditZone}>
                {activeEditZone &&  <EditZone/>}
            </MyModal>}
            {activeEditNode && <MyModal visible={activeEditNode} setVisible={setActiveEditNode}>
                {activeEditNode &&  <EditNode/>}
            </MyModal>}
        </div>
    );
};

export default ModalBlock;