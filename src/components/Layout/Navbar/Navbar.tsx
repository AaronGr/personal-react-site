import React from 'react';
import { NavRefs } from '../../../models/Nav';

import styles from './Navbar.module.css';

interface NavProps {
    navRefs: NavRefs
}

const Navbar: React.FC<NavProps> = (props) => {
    const scrollToPortfolioHandler = () => {
        props.navRefs.portfolioRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToContactHandler = () => {
        props.navRefs.contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToAboutHandler = () => {
        props.navRefs.aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <header className={styles.navbar}>
            <div className={styles['nav-items']}>
                <nav onClick={scrollToAboutHandler} className={styles['nav-item']}>About Me</nav>
                <nav onClick={scrollToPortfolioHandler} className={styles['nav-item']}>Portfolio</nav>
                <nav onClick={scrollToContactHandler} className={styles['nav-item']}>Contact</nav>
            </div>
        </header>
    );
};

export default Navbar;