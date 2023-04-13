import React from 'react';
import BackIco from "./tag/backIco";
import Search from "./meny/search/search";
import styles from "./vvodPlanaStyle.module.sass";

const SearchRout = () => {
    console.log("Рендер SearchRout_КНОПКА назад ____________________________________")
    return (
        <div className={styles.main}>
            <BackIco/>
            <Search/>
        </div>
    );
};

export default SearchRout;