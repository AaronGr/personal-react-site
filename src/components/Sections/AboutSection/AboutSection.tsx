import React from 'react';

import styles from './AboutSection.module.css';
import headshot from '../../../images/circle-headshot.png';

type AboutProps = JSX.IntrinsicElements["section"];

const aboutParagraph = (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget. Enim eu 
        turpis egestas pretium aenean. Volutpat consequat mauris nunc congue. Id volutpat lacus 
        laoreet non curabitur gravida arcu. Ac orci phasellus egestas tellus rutrum tellus. Nunc 
        lobortis mattis aliquam faucibus purus. Sit amet consectetur adipiscing elit ut. Nunc sed 
        id semper risus in. Gravida quis blandit turpis cursus in hac. Fermentum et sollicitudin 
        ac orci phasellus egestas. Eu ultrices vitae auctor eu augue. Placerat duis ultricies lacus
        sed turpis tincidunt id. Vitae justo eget magna fermentum iaculis. Nibh venenatis cras sed felis eget.
    </p>
)

const AboutSection = React.forwardRef<HTMLElement, AboutProps> (
    (props, ref) => {
        return (
            <section 
                className={styles['about-section']}
                ref={ref}
            >
                <div className={styles['about-content']}>
                    <div className={styles.headshot}>
                        <img  src={headshot} alt='headshot of Aaron' />
                    </div>
                    <div className={styles['about-text']}>
                        <h1>Hello! My name is Aaron and I am a full-stack developer.</h1>
                        {aboutParagraph}
                    </div>
                </div>
            </section>
        )
});

export default AboutSection;