import React from 'react';

import styles from './PortfolioViewer.module.css';
import reactMealsImg from '../../../../images/ReactMeals.png';
import View from './View';

const PortfolioViewer = () => {
    return (
        <div className={styles.viewer}>
            <View 
                href='https://react-meals-web-app-2d01b.firebaseapp.com/' 
                imgSrc={reactMealsImg}
                altTxt='React Meals Web App'
            />
        </div>
    )
};

export default PortfolioViewer;