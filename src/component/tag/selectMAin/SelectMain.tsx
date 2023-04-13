import React, {useContext} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const SelectMain = ()=> {
    console.log("Рендер SelectMain ____________________________________")

    const {store} = useContext(Context);

    const planStock = (event)=>{
        store.setStockActive(store.plan.findIndex(el => el.id_stock === Number(event.target.value)) + 1);
        console.log(store.plan[store.stock_active-1]?.name)
    }

    return (
        <div className={'input-field '} style={{display: "flex", alignItems: "center"}}>
            <select className="browser-default" style={{
                backgroundColor: "rgb(255 255 255 / 0%)",
                border: '1px solid #f2f2f200',
                minWidth: "200px"
            }}
                    onChange={(event)=>{planStock(event)}}
            >
                {store.stock_active ? <option value={store.stock_active} disabled selected>{store.stock_active}.&nbsp;{store.plan[store.stock_active-1]?.name}</option> :<option value="" disabled selected>Выбрать план склада</option>}
                {store.plan.map((plan, index) =>
                    <option key={index} value={plan.id_stock}>{plan.id_stock}.&nbsp;{plan.name}</option>
                )}
            </select>
        </div>
    );
};

export default observer(SelectMain);