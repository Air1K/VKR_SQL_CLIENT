import React, {memo, useContext, useEffect, useRef, useState} from 'react';
import styles from "./stylesMyModal.module.sass"
import {Context} from "../../../index";
const MyModal = ({children, visible, setVisible}) => {
    console.log("Рендер MyModal ____________________________________")
    const {store} = useContext(Context);
    // const visible = props.visible
    const [width_, setWidth_] = useState(1);
    const rootClasses = [styles.myModal]
    if(visible){
        rootClasses.push(styles.active)
    }
    const divBlock = useRef(null);
    useEffect(()=>{
        setWidth_(divBlock.current.getBoundingClientRect().width);
        return()=>{
            store.setMessages('')
            console.log("Очищен")
        }
    }, [])
    return (
        <div className={rootClasses.join(' ')}  onClick={()=>setVisible(false)}>
            <div style={{width: `${width_}px`}}>{children.length === undefined ? null: children[0]}</div>
            <div ref={divBlock} className={styles.myModalContent} onClick={(e)=>{e.stopPropagation()}}>
                {children.length === undefined ? children: children[1]}
            </div>
        </div>
    );
};

export default memo(MyModal);