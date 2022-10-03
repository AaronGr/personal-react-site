import React, { useState } from 'react';

import styles from './PortfolioViewer.module.css';
import reactMealsImg from '../../../../images/ReactMeals.png';
import blogSiteImg from '../../../../images/blog-app.png';
import View from './View';

const views = [
    {
        href: 'https://react-meals-web-app-2d01b.firebaseapp.com/',
        imgSrc: reactMealsImg,
        altTxt: 'React Meals Web App'
    },
    {
        href: 'https://frozen-falls-37428.herokuapp.com/',
        imgSrc: blogSiteImg,
        altTxt: 'Blog Web App' 
    }
] 

const PortfolioViewer = () => {
    const [currentViewIndex, setCurrentViewIndex] = useState(0);

    const scrollToNextView = () => {
        console.log(currentViewIndex);
        if (currentViewIndex === views.length - 1) {
            setCurrentViewIndex(0);
        } else {
            setCurrentViewIndex(currentViewIndex + 1);
        }
    };

    const scrollToLastView = () => {
        console.log(currentViewIndex);
        if (currentViewIndex === 0) {
            setCurrentViewIndex(views.length - 1);
        } else {
            setCurrentViewIndex(currentViewIndex - 1);
        }
    };

    return (
        <div className={styles.viewer}>
            <button onClick={scrollToLastView} className={styles['viewer-btn']}>&lt;</button>
            <View viewData={views[currentViewIndex]}/>
            <button onClick={scrollToNextView} className={styles['viewer-btn']}>&gt;</button>
        </div>
    )
};

export default PortfolioViewer;