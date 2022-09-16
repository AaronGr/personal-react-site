import React from 'react';

import styles from './AboutSection.module.css';

type AboutProps = JSX.IntrinsicElements["section"];

const AboutSection = React.forwardRef<HTMLElement, AboutProps> (
    (props, ref) => {
        return (
            <section 
                className={styles['about-section']}
                ref={ref}
            >
            </section>
        )
});

export default AboutSection;