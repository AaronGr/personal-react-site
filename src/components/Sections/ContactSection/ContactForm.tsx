import { FormEvent } from 'react';
import useInput from '../../../hooks/use-input';
import styles from './ContactForm.module.css';
import axios from 'axios';

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

const ContactForm = () => {
    const {
        value: nameValue,
        isValid: nameIsValid,
        // hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        // hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmail);

    const {
        value: messageValue,
        isValid: messageIsValid,
        // hasError: messageHasError,
        textAreaChangeHandler: messageChangeHandler,
        textAreaBlurHandler: messageBlurHandler,
        reset: resetMessage
    } = useInput(isNotEmpty);

    const instance = axios.create({
        baseURL: 'https://us-central1-my-website-server-363416.cloudfunctions.net/app',
        timeout: 10000,
      })

    let formIsValid = false;

    if (nameIsValid && emailIsValid && messageIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }
        
       instance.post('/email', {
            name: nameValue,
            email: emailValue,
            message: messageValue
        })
        .then(response => {
            console.log("Success!", response);
        })
        .catch(error =>{
            throw error;
        }); 

        resetName();
        resetEmail();
        resetMessage();
    };

    return (
        <form onSubmit={submitHandler} className={styles["email-form"]}>
            <h1 className={styles.header}>Contact Me</h1>
            <div className={styles['contact-input']} >
                <label>Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={nameValue}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
            </div>
            <div className={styles['contact-input']} >
                <label>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
            </div>
            <div className={styles['contact-input']} >
                <label>Message</label>
                <textarea 
                    rows={10}
                    id="message"
                    value={messageValue}
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                />
            </div>
            <button className={styles["submit-btn"]} type="submit">Submit</button>
        </form>
    )
};

export default ContactForm;