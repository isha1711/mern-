import { Descriptions } from "antd"

const RegisterSchema =
{
    firstName: "",
    lastName: "",
    mobileNumber: "",
    username: "",
    password: "",
}

const LoginSchema =
{
    username: '',
    password: '',
}

const Homeschema =
{
    title: '',
    description: '',
}

const CreateFormInit = {
    title: '',
    description: '',
    dueDate: null,
    priority: '',
    completed: false,
}



export { RegisterSchema, LoginSchema, Homeschema ,CreateFormInit}