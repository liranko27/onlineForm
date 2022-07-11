import "./App.css";
import FormInput from "./FormInput";
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "username should be 3-16 chars and not inclued speatial char",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "should be a valid email",
      required: true,
      pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
      required: true,
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password dont match ",
      required: true,
      pattern: values.password,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    let output = ''
    for(const input in values){
      
      output+=`${input}: ${values[input]}\n`
    }
    alert(output)
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
