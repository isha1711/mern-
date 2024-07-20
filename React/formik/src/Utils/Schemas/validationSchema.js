import * as Yup from "yup";

// Validation Schema
const RegisterSchema = Yup.object().shape({
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


// Validation Schema
const LoginSchema = Yup.object().shape({
  username: Yup.string()
      .email('Must be a valid email address')
      .required('Email is required'),
  password: Yup.string()
      .required('Password is required'),
});

const HomeSchema = Yup.object().shape({
  title: Yup.string().required("Please Enter Your Title"),
  description: Yup.string().required("Please enter your description")
})

const CreateTodoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  dueDate: Yup.date().required('Due date is required').nullable(),
  priority: Yup.string().required('Priority is required'),
  completed: Yup.boolean(),
});

export {RegisterSchema,LoginSchema,HomeSchema,CreateTodoSchema}



