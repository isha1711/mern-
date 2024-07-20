import React, { useContext } from 'react';
import { Form, Input, Button, DatePicker, Select, Checkbox } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
// import 'antd/dist/antd.css';  // Ensure Ant Design styles are imported
import { CreateFormInit } from '../Utils/Schemas/Auth';
import { CreateTodoSchema } from '../Utils/Schemas/validationSchema';
import { CreateTodo } from '../Utils/Forms/Auth';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../store/TodoContext';


const Create = () => {
    const { Option } = Select;
    const { todos, addTodo, removeTodo } = useContext(TodoContext)
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={CreateFormInit}
            validationSchema={CreateTodoSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                CreateTodo({
                    AddTodo: addTodo,
                    values,
                    navigate
                })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onFinish={handleSubmit} layout="vertical">
                    <Form.Item
                        label="Title"
                        validateStatus={touched.title && errors.title ? "error" : ""}
                        help={touched.title && errors.title ? errors.title : null}
                    >
                        <Input
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        validateStatus={touched.description && errors.description ? "error" : ""}
                        help={touched.description && errors.description ? errors.description : null}
                    >
                        <Input.TextArea
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Due Date"
                        validateStatus={touched.dueDate && errors.dueDate ? "error" : ""}
                        help={touched.dueDate && errors.dueDate ? errors.dueDate : null}
                    >
                        <DatePicker
                            onChange={(date, dateString) => setFieldValue('dueDate', date)}
                            onBlur={handleBlur}
                            value={values.dueDate ? moment(values.dueDate) : null}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Priority"
                        validateStatus={touched.priority && errors.priority ? "error" : ""}
                        help={touched.priority && errors.priority ? errors.priority : null}
                    >
                        <Select
                            name="priority"
                            onChange={value => setFieldValue('priority', value)}
                            onBlur={handleBlur}
                            value={values.priority}
                        >
                            <Option value="high">High</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="low">Low</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="completed"
                        valuePropName="checked"
                    >
                        <Checkbox
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.completed}
                        >
                            Completed
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                            Add Todo
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    );
};

export default Create;