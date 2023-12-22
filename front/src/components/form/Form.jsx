import { useState, useEffect } from "react";
import validation from "./validation";
import style from './Form.module.css';

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
        // aca llamamos a la funcion validation con los valores de mi estado (userData) y utilizamos el setErros para que se vaya actualizando a medida que escribimos.
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
        <div className={style.fondo}>
            <div className="{style.container}">
                <form onSubmit={handleSubmit} className={style.form}>
                    
                    <section className={style.section}>
                        <label htmlFor="email" className={style.label}>Email: </label>
                        <input 
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Example@gmail.com"
                            onChange={handleChange}
                            value={userData.email}
                            className={style.input}
                        />
                        {errors.email !== '' && <p style={{ color: 'white' }}>{errors.email}</p>}
                        <br />
                    </section>

                    <section className={style.section}>
                        <label htmlFor="password" className={style.label}>Password: </label>
                        <input 
                            id="password"
                            type="password" 
                            name="password" 
                            placeholder="*******"
                            onChange={handleChange}
                            value={userData.password} 
                            className={style.input} 
                        />
                        {errors.password !== '' && <p style={{ color: 'white' }}>{errors.password}</p>}            
                        <br />
                    </section>
                    <button type="submit" className={style.boton}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;