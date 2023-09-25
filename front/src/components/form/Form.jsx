import { useState, useEffect } from "react";
import validation from "./validation";

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
    }
        // aca llamamos a la funcion validation con los valores de mi estato (userData) y utilizamos el setErros para que se vaya actualizando a medida que escribimos.
    useEffect(() => {
        if(userData.email !== '' || userData.password !== ''){
            setErrors(validation(userData))
        }
    }, [userData])

    const handleSubmit = (event) => {
        event.preventDefault(),
        login(userData)
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
                id="email"
                type="email" 
                name="email"
                placeholder="Escriba su email"
                onChange={handleChange}
                value={userData.email}
            />
            {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}
            <br />

            <label htmlFor="password">Password: </label>
            <input 
                id="password"
                type="password" 
                name="password" 
                placeholder="Escriba su contraseña"
                onChange={handleChange}
                value={userData.password}  
            />
            {errors.password !== '' && <p style={{ color: 'red' }}>{errors.password}</p>}            
            <br />

            <button>Submit</button>
        </form>
    )
}

export default Form;