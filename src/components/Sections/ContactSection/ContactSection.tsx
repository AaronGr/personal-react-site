import React from 'react';

import styles from './ContactSection.module.css';

type ContactProps = JSX.IntrinsicElements["section"];

const ContactSection = React.forwardRef<HTMLElement, ContactProps> (
    (props, ref) => {
        return (
            <section 
                className={styles['contact-section']}
                ref={ref}
            >
            </section>
        )
});

export default ContactSection;