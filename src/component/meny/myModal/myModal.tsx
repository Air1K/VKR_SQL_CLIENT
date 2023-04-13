import React, {memo} from 'react';
import styles from "./stylesMyModal.module.sass"
const MyModal = ({children, visible, setVisible}) => {
    console.log("Рендер MyModal ____________________________________")

    // const visible = props.visible
    const rootClasses = [styles.myModal]
    if(visible){
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')}  onClick={()=>setVisible(false)}>
            <div className={styles.myModalContent} onClick={(e)=>{e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default memo(MyModal);