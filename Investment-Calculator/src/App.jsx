import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";
import { useState } from "react";


function App() {
  const [values, setValues] = useState({
    Initial: "",
    annual: "",
    expected: "",
    duration: ""
  });

  const inputIsValid = values.duration  >= 1;

  function handleInputChange(e){
    const {name, value} = e.target;
    setValues(prevValues =>{
        if (name === "Initial"){
           return{
            ...prevValues, 
            Initial : +value, 
           }
        }
        else if (name === "annual"){
            return{
                ...prevValues, 
                annual : +value,
            }
        }
        else if (name === "duration"){
           return {
            ...prevValues,   
            duration : +value,
        }
        }
        else if (name === "expected"){
            return {
                ...prevValues, 
                expected : +value,
            }
        }
    })
}

  return (
    <>
      <Header/>
      <UserInput handleChange={handleInputChange} updateValue={values}/>
      {inputIsValid ? <Result input={values}/>: <p className="center">Please enter a duration greater than zero</p>}
    </>
  )
}

export default App
