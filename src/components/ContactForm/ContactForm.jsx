import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
    const initialValues = {
        name: '',
        number: '',
    };

    const contactSchema = Yup.object().shape({
        name:Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
        number: Yup.string().min(7).required('Required'),
    });

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
    };

    return (
        <div className={s.wrapper}>
            <Formik validationSchema={contactSchema} onSubmit={onSubmit} initialValues={initialValues}>
                  <Form className={s.form}>
                  <label className={s.label}>
                      <span>Name</span>
                      <Field name='name' className={s.input}></Field>
                      <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <label className={s.label}>
                      <span>Number</span>
                      <Field name='number' className={s.input}></Field>
                      <ErrorMessage name='number' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <button type='submit' className={s.button}>Add contact</button>
              </Form>
            </Formik>
        </div>
    )

};

export default ContactForm;