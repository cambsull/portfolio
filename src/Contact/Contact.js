import React from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data; try {
            const templateParams = {
                name,
                email,
                subject,
                message
            }; await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <>
            <div className={styles.primaryContainer}>

            <div className={styles.ContactForm}>
                <div className={styles.container}>
                    Shoot me a message!
                    <div className={styles.row}>
                        <div>
                            <div className={styles.contactForm}>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    {// Row 1
                                    }
                                    <div className={styles.formRow}>
                                        <div>
                                            <input
                                                type='text'
                                                name='name'
                                                {...register('name', {
                                                    required: { value: true, message: 'Please enter your name' },
                                                    maxLength: {
                                                        value: 30,
                                                        message: '30 characters or less'
                                                    }
                                                })}          
                                                placeholder='Name'
                                            ></input>
                                            {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                                        </div>
                                        <div className={styles.formRow}>
                                            <input
                                                type='email'
                                                name='email'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                })}
                                                placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                                <span className={styles.errorMessage}>Please enter a valid email</span>
                                            )}
                                        </div>
                                    </div>
                                    {// Row 2
                                    }
                                    <div className={styles.formRow}>
                                        <div>
                                            <input
                                                type='text'
                                                name='subject'
                                                {...register('subject', {
                                                    required: { value: true, message: 'Please enter a subject'},
                                                    maxLength: {
                                                        value: 75,
                                                        message: 'Subject cannot exceed 75 characters'
                                                    }
                                                })}
                                                placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                                <span className={styles.errorMessage}>{errors.subject.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    {// Row 3
                                    }
                                    <div className={styles.formRow}>
                                        <div>
                                            <textarea
                                                rows={5}
                                                name='message'
                                                {...register('message', {
                                                    required: true
                                                })}
                                                placeholder='Message'
                                            ></textarea>
                                            {errors.message && <span className={styles.errorMessage}>Please enter a message</span>}
                                        </div>
                                    </div>
                                    <button className={styles.submitBtn} type='submit'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Contact;