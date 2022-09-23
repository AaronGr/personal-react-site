import React, { useRef, useState } from 'react';
import { NavRefs } from '../../../models/Nav';

import styles from './Navbar.module.css';

interface NavProps {
    navRefs: NavRefs
}

const Navbar: React.FC<NavProps> = (props) => {
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const [activeNav, setActiveNav] = useState(null);

    const scrollToPortfolioHandler = () => {
        setActiveNav(portfolioRef.current);
        props.navRefs.portfolioRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToContactHandler = () => {
        setActiveNav(contactRef.current);
        props.navRefs.contactRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToAboutHandler = () => {
        setActiveNav(aboutRef.current);
        props.navRefs.aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    }


    return (
        <header className={styles.navbar}>
            <div className={styles['nav-items']}>
                <nav 
                    ref={aboutRef} 
                    id="about" 
                    onClick={scrollToAboutHandler} 
                    className={aboutRef.current === activeNav && aboutRef.current != null ? styles['nav-item-active'] : styles['nav-item']}>
                        About Me
                </nav>
                <nav 
                    ref={portfolioRef} 
                    id="portfolio" 
                    onClick={scrollToPortfolioHandler} 
                    className={portfolioRef.current === activeNav && portfolioRef.current != null ? styles['nav-item-active'] : styles['nav-item']}>
                        Portfolio
                </nav>
                <nav 
                    ref={contactRef} 
                    id="contact" 
                    onClick={scrollToContactHandler} 
                    className={contactRef.current === activeNav && contactRef.current != null ? styles['nav-item-active'] : styles['nav-item']}>
                        Contact
                </nav>
            </div>
        </header>
    );
};

export default Navbar;