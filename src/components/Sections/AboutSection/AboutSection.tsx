import React, { UIEventHandler } from 'react';

import styles from './AboutSection.module.css';
import headshot from '../../../images/circle-headshot.png';

type AboutProps = {
    onScrollHandler: UIEventHandler<HTMLElement>
}

const aboutParagraph = (
    <p>
        Thank you for visiting my website!  I have professional industry experience using multiple web technologies. 
        I have worked with front-end frameworks such as React and Angular, as well as NodeJS and Spring for back-end. 
        I am also well versed with AWS technologies including S3, EC2, ECS, RDS, and Lambda written in Python.  

        When I'm not doing web development I enjoy playing my guitar or a good videogame.  
        Below you will find some personal projects have worked on and a contact form if you would like to reach me.
        Looking forward to hearing from you!
    </p>
)

const AboutSection = React.forwardRef<HTMLElement, AboutProps> (
    (props, ref) => {
        return (
            <section 
                className={styles['about-section']}
                ref={ref}
                onScroll={props.onScrollHandler}
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