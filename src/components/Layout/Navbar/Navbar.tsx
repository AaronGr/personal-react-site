import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles['nav-items']}>
                <span className={styles['nav-item']}>About Me</span>
                <span className={styles['nav-item']}>Portfolio</span>
                <span className={styles['nav-item']}>Contact</span>
            </div>
        </header>
    );
};

export default Navbar;