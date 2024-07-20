import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { UserContext } from "../store/UserContext"
import { useNavigate } from "react-router-dom";
import { LoginSchema } from '../Utils/Schemas/Auth';
import { Login } from '../Utils/Forms/Auth';



const LoginForm = () => {
    const navigate = useNavigate();
    const store = useContext(UserContext);
    console.log(store)

    return (
        <Formik
            initialValues={LoginSchema}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
                Login(
                    {
                        navigate:navigate,
                        values:values,
                        loginUser: store.loginUser
                    }
                )
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onFinish={handleSubmit} className="login-form">
                    <Form.Item
                        validateStatus={touched.username && errors.username ? "error" : ""}
                        help={touched.username && errors.username ? errors.username : null}
                    > 


                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            type="email"
                            name="username"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                    </Form.Item>

                    <Form.Item
                        validateStatus={touched.password && errors.password ? "error" : ""}
                        help={touched.password && errors.password ? errors.password : null}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;