import React from 'react';
import styles from "../app/page.module.css";

const Footer = () => {
    return (
        <footer className={styles.wmGw4}>
            <a href='https://support.google.com/accounts?hl=ru&p=account_iph'>
                Русский
            </a>
            <div className={styles.secondHalf}>
                <a target='_blank' href='https://support.google.com/accounts?hl=ru&p=account_iph'>
                    Справка
                </a>
                <a target='_blank' href='https://accounts.google.com/TOS?loc=UA&hl=ru&privacy=true'>
                    Конфиденциальность
                </a>
                <a target='_blank' href='https://accounts.google.com/TOS?loc=UA&hl=ru'>
                    Условия
                </a>
            </div>
        </footer>
    );
};

export default Footer;