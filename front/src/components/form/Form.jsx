import { useState } from "react";
import validation from "../validation/validation";

const Form = ({login}) => {
  
    const [userData, setUserData] = useState({
        email: '',
        password: ''
      })

    const [errors, setErrors] = useState({})
      
    const handleChange = (event) => {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });

        setErrors(validation(userData))
    }

    const handleSubmit = (event) => {
        event.preventDefault(),
        login(userData)
    }
   
    return(
        <form>
            <label htmlFor="">Email:</label>
            <input 
                type="email" 
                name="email"
                placeholder="Escriba su email"
                onChange={handleChange}
                value={userData.email}
            />
            {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}
            <br />

            <label htmlFor="">Password:</label>
            <input 
                type="text" 
                name="password" 
                placeholder="Escriba su contraseña"
                onChange={handleChange}
                value={userData.password}
            />
            {errors.password !== '' && <p style={{ color: 'red' }}>{errors.password}</p>}            
            <br />

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;