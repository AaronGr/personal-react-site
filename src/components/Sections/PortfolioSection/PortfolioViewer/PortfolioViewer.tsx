import React from 'react';

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
    return (
        <div className={styles.viewer}>
            <button className={styles['viewer-btn']}>&lt;</button>
            <View viewData={views[1]}/>
            <button className={styles['viewer-btn']}>&gt;</button>
        </div>
    )
};

export default PortfolioViewer;