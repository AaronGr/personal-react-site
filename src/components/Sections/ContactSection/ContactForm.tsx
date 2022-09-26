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
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmail);

    const {
        value: messageValue,
        isValid: messageIsValid,
        hasError: messageHasError,
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
        console.log(event);
        
       instance.post('/email', {
            name: nameValue,
            email: emailValue,
            message: messageValue
        }); 
    };

    return (
        <form onSubmit={submitHandler} className={styles["email-form"]}>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="name" 
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
            />
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
            />
            <textarea 
                rows={20}
                id="message"
                placeholder="email me"
                value={messageValue}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

export default ContactForm;