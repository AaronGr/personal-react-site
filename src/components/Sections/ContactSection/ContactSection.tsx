import React from 'react';
import ContactForm from './ContactForm';

import styles from './ContactSection.module.css';

type ContactProps = JSX.IntrinsicElements["section"];

const ContactSection = React.forwardRef<HTMLElement, ContactProps> (
    (props, ref) => {
        return (
            <section 
                className={styles['contact-section']}
                ref={ref}
            >
                <ContactForm />
            </section>
        )
});

export default ContactSection;