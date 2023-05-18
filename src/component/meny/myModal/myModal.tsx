import React, {memo, useEffect, useRef, useState} from 'react';
import styles from "./stylesMyModal.module.sass"
const MyModal = ({children, visible, setVisible}) => {
    console.log("Рендер MyModal ____________________________________")

    // const visible = props.visible
    const [width_, setWidth_] = useState(1);
    const rootClasses = [styles.myModal]
    if(visible){
        rootClasses.push(styles.active)
    }
    const divBlock = useRef(null);
    useEffect(()=>{
        setWidth_(divBlock.current.getBoundingClientRect().width);
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