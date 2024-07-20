import { toast } from "react-toastify";

const Registration = ({registerUser,values,navigate})=>{
    try {
        var result = registerUser({
          username: values.username,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          mobileNumber: values.mobileNumber,
        });

        if(result.registration){
          navigate("/login")
        }

      } catch (error) {
        console.log(error)
      }
} 

const Login = ({navigate,values,loginUser})=>{
    try {
        var result = loginUser({
        username: values.username,
        password: values.password,
    }); 
    if(result.loggedIN){
        navigate("/")
      }

    } catch (error) {
      console.log(error)
    }
}

const Homeadd = ({values,homeUser})=>{
  var add = homeUser({
    title: values.title,
    description: values.description,
  })
}

const CreateTodo = ({AddTodo,values,navigate})=>{
  try {
      var result = AddTodo({
          id : Math.random()*100,
          title: values.title,
          description:values.description,
          dueDate: values.dueDate,
          priority: values.priority,
          completed: false,
      })
      if(result.success){
          toast.success(result.message)
          navigate("/")
      }else{
          toast.error("Not Created")
      }
  } catch (error) {
      console.log(error.message)
      toast.error(error.message)
  }
}

export {Registration,Login,Homeadd,CreateTodo};