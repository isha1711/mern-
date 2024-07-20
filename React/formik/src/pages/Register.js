import React, { useContext } from "react";
import { Formik } from "formik";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { UserContext } from "../store/UserContext"
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../Utils/Schemas/Auth";
import { Registration } from "../Utils/Forms/Auth";

const RegistrationForm = () => {
  const store = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={RegisterSchema}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        Registration({
            registerUser : store.registerUser, 
            values:values, 
            navigate:navigate
          })
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
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;