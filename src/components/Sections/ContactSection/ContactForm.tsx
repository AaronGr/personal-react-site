import React from 'react';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <form className={styles["email-form"]}>
            <input type="text" id="name" name="name" placeholder="name" />
            <textarea rows={20} placeholder="email me" />
        </form>
    )
};

export default ContactForm;