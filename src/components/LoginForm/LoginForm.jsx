import { Field, Form, Formik } from "formik";
import s from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={s.wrapper}>
            <h2>Log In</h2>
            <Formik>
                <Form className={s.form}>
                  <Field name='email' placeholder='Enter email' />
                  <Field name='password' type='password' placeholder='Enter pass' />
                  <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
};

export default LoginForm;