import React from 'react';
import RegisterForm from 'components/forms/RegisterForm';
import {registerUser} from 'actions' // this is to register user using register form see actions folder index.js registerUser Funcation
import { Redirect } from 'react-router-dom';
import ApiErrors from 'components/forms/ApiErrors';

class Register extends React.Component {

  state ={
    shouldRedirect:false,
    errors: []         // if error is thrown from db back to user , errors[] array is use to store those error , see signUp function catch error below 
  }

  signUp =(registerData) => {
  registerUser (registerData)
  .then(() => this.setState ({shouldRedirect:true})) // if login successfull, tell function to redirect to login page 
  .catch (errors => this.setState({errors}))
   }
  
  //  alert(JSON.stringify(registerData)); //this is to test what data send when submit new user in signUp func above
 

render() {

const {shouldRedirect, errors} = this.state; // if the state is true (see above state function) then

if(shouldRedirect){
  return <Redirect to={{pathname: './login', state: {message: 'Registration process completed. Please login below.'}}} />  // then redirect to login page 
}
  return (
  <div className="bwm-form">
  <div className="row">
    <div className="col-md-5">
      <h1 className="page-title">Register</h1>

      <RegisterForm onSubmit = {this.signUp}/>

      <ApiErrors errors ={errors}/> {/*function from ApiErrors.js for displayig user in registration form 

      /* <div className="alert alert-danger">
        <p>
          Some Error  See ApiError.js under form folder
        </p>
      </div> */}

      
    </div>
    <div className="col-md-6 ml-auto">
      <div className="image-container">
        <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
        <img src="/images/register-image.jpg" alt="Register an user" />
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default Register;
