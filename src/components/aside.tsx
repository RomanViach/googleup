'use client'
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from "./aside.module.css";

const Aside = () => {
    const [re, setRe] = useState<boolean>(true)
    const removeShowing = useCallback(() => {
        setRe(false)
    }, []);
    if(!re) {
        return <></>
    }
    return (
        <aside  className={styles.aside}>
            <div  className={styles.asideLeftHalf}>
                <div className={styles.logo}>
                    <img className={styles.logoImg} src='https://www.gstatic.com/images/branding/productlogos/googleg/v6/36px.svg'/>
                </div>
                <div><h5 className={styles.upperAsideText}>Новый вид страницы входа</h5>
                    <p className={styles.bottomAsideText}>Мы обновили дизайн страницы входа в аккаунт Google.</p></div>
            </div>
            <div className={styles.asideRightHalf}>
                <a className={styles.more}
                   target='_blank' href='https://support.google.com/accounts?p=new-si-ui' aria-label='Подробнее…'
                >
                    Подробнее…</a>
                <div className={styles.closeBtn}
                onClick={removeShowing}>
                    Закрыть
                </div>
            </div>
        </aside>
    );
};

export default Aside;