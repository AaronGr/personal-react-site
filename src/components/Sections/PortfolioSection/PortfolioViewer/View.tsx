import React from 'react';
import { PortfolioViewData } from '../../../../models/PortfolioViewer';

import styles from './View.module.css';

type ViewProps = {
    viewData: PortfolioViewData
}

const View: React.FC<ViewProps> = (props) => { 
    return (
        <div className={styles.view}>
            <a href={props.viewData.href} target="_blank" rel="noreferrer">
                <img src={props.viewData.imgSrc} alt={props.viewData.altTxt} />
            </a>
        </div>
    ) 
};

export default View;