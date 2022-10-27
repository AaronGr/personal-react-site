import { useState } from 'react';

import styles from './PortfolioViewer.module.css';
import reactMealsImg from '../../../../images/ReactMeals.png';
import blogSiteImg from '../../../../images/blog-app.png';
import leftArrowImg from '../../../../images/left-arrow.png';
import rightArrowImg from '../../../../images/right-arrow.png';
import View from './View';

const views = [
    {
        href: 'https://react-meals-web-app-2d01b.firebaseapp.com/',
        imgSrc: reactMealsImg,
        altTxt: 'React Meals Web App',
        description: 'Food ordering app created with React.'
    },
    {
        href: 'https://frozen-falls-37428.herokuapp.com/',
        imgSrc: blogSiteImg,
        altTxt: 'Blog Web App',
        description: 'Blog website created using EJS. Uses MongoDB to store blog posts.'
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
            <div className={styles['viewer-btn']}>
                <input 
                    onClick={scrollToLastView} 
                    type="image" 
                    className={styles['viewer-btn']}
                    src={leftArrowImg} 
                    alt="portfolio left arrow navigation"
                />
            </div>
            <View viewData={views[currentViewIndex]}/>
            <div className={styles['viewer-btn']} >
                <input 
                    onClick={scrollToNextView} 
                    type="image"
                    className={styles['viewer-btn']}
                    src={rightArrowImg}
                    alt="portfolio right arrow navigation"
                />
            </div>
        </div>
    )
};

export default PortfolioViewer;