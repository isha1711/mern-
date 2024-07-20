import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { UserContext } from "../store/UserContext";
// import { UserContext } from "../components/store/UserContext";
// import { useUser } from "../store/UserContext";
// import { useUser } from "../store/UserContext";


// Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  username: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const store = useContext(UserContext);
  console.log(store)
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mobileNumber: "",
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values,{ setSubmitting }) => {
        store?.registerUser({
          username: values.username,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          mobileNumber: values.mobileNumber,
        });
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
            validateStatus={
              touched.firstName && errors.firstName ? "error" : ""
            }
            help={
              touched.firstName && errors.firstName ? errors.firstName : null
            }
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
          </Form.Item>

          <Form.Item
            validateStatus={touched.lastName && errors.lastName ? "error" : ""}
            help={touched.lastName && errors.lastName ? errors.lastName : null}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
          </Form.Item>

          <Form.Item
            validateStatus={
              touched.mobileNumber && errors.mobileNumber ? "error" : ""
            }
            help={
              touched.mobileNumber && errors.mobileNumber
                ? errors.mobileNumber
                : null
            }
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber}
            />
          </Form.Item>

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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              to="login"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;