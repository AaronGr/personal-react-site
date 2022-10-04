import React from 'react';

import styles from './PortfolioSection.module.css';
import PortfolioViewer from './PortfolioViewer/PortfolioViewer';

type SectionProps = JSX.IntrinsicElements["section"];

const PortfolioSection  = React.forwardRef<HTMLElement, SectionProps> (
    (props, ref) => {
        return (
            <section 
                ref={ref}
                className={styles['portfolio-section']}
            >
                <PortfolioViewer />
            </section>
        )
});

export default PortfolioSection;