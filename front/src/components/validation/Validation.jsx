const validation = (userData) => {
    const errors = {};
     if(!/\S+@\S+.\S+/.test(userData.email)){
        errors.email= 'Check your Email, Error Detected';
     }
     if(!userData.email){
        errors.email= 'Username cannot be empty.';
     }
      if(userData.email.length > 35){
         errors.email= 'The username cannot be more than 35 characters.'
      }
    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password ='Password length must contain 6-10 characters'
     }
     if(!/.\d+./.test(userData.password)){errors.password = 'Password must contain a number'}

     return errors;
}

export default validation;