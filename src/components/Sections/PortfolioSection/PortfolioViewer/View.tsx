import React from 'react';

import styles from './View.module.css';

type ViewProps = {
    href: string,
    imgSrc: string,
    altTxt: string
}

const View: React.FC<ViewProps> = (props) => { 
    return (
        <div className={styles.view}>
            <a href={props.href} target="_blank" rel="noreferrer">
                <img src={props.imgSrc} alt={props.altTxt} />
            </a>
        </div>
    ) 
};

export default View;