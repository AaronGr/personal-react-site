import React from 'react';

import styles from './PortfolioSection.module.css';

type SectionProps = JSX.IntrinsicElements["section"];

const PortfolioSection  = React.forwardRef<HTMLElement, SectionProps> (
    (props, ref) => {
        return (
            <section 
                ref={ref}
                className={styles['portfolio-section']}
            >
            </section>
        )
});

export default PortfolioSection;