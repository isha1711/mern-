import React, { useContext } from 'react'
import { useFormik , Formik,Form,Field } from 'formik';
import * as Yup from "yup";
// import { Form, Input, Button } from "antd";
import { UserContext } from '../store/UserContext';

// validation
const loginregistration = Yup.object({
name: Yup.string().required("Please enter your username"),
password: Yup.string().required("Please enter your password")
})

const initialValues={
name:'',
password:'',
}
function Login() {
    const store = useContext(UserContext);
    console.log(store)
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={loginregistration}
    onSubmit={(values,{ setSubmitting }) => {
        store?.loginUser({
          name: values.name,
          password: values.password,
        });
      }}
    >
        {({errors}) => ( <Form>
    <label htmlFor='name'>Username</label>
    <br/>
    <Field type="text" name="name"></Field>
    <br/>
    {errors.name && <small>{errors.name}</small>}
    <br/>
    <label htmlFor='password'>Password</label><br/>
    <Field type="password" name="password"></Field>
    <br/>
    {errors.password && <small>{errors.password}</small>}
    <br/>
    <button type='submit'>Log in</button>
   </Form>)}
  
   </Formik>
  )
}

export default Login;