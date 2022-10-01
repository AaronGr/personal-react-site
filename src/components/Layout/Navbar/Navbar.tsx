import React, { useRef } from 'react';
import { NavRefs } from '../../../models/Nav';

import styles from './Navbar.module.css';

interface NavProps {
    navRefs: NavRefs,
    isAboutVisible: boolean,
    isContactVisible: boolean,
    isPortfolioVisible: boolean
}

const Navbar: React.FC<NavProps> = (props) => {
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToPortfolioHandler = () => {
        props.navRefs.portfolioRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollToContactHandler = () => {
        props.navRefs.contactRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollToAboutHandler = () => {
        props.navRefs.aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <header className={styles.navbar}>
            <div className={styles['nav-items']}>
                <nav 
                    ref={aboutRef} 
                    id="about" 
                    onClick={scrollToAboutHandler} 
                    className={props.isAboutVisible ? styles['nav-item-active'] : styles['nav-item']}>
                        About Me
                </nav>
                <nav 
                    ref={portfolioRef} 
                    id="portfolio" 
                    onClick={scrollToPortfolioHandler} 
                    className={props.isPortfolioVisible ? styles['nav-item-active'] : styles['nav-item']}>
                        Portfolio
                </nav>
                <nav 
                    ref={contactRef} 
                    id="contact" 
                    onClick={scrollToContactHandler} 
                    className={props.isContactVisible ? styles['nav-item-active'] : styles['nav-item']}>
                        Contact
                </nav>
            </div>
        </header>
    );
};

export default Navbar;