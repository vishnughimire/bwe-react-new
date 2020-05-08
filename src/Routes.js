import React from 'react'
import { Switch, Route } from "react-router-dom"; // for URL navigation in same page wihout refeshing 
import RentalDetail from './Pages/RentalDetail';

import AuthRoute from 'components/auth/AuthRoute'  // this function is used to display secret page only to authenticated users 
import RentalHome from  './Pages/RentalHome';  // import rentalHome.JS here for navigation 
import Login from  './Pages/Login';           // import Login.JS here for navigation 
import Register from  './Pages/Register';     // import Register.JS here for navigation 
import SecretPage from 'Pages/SecretPage';
import GuestRoute from 'components/auth/GuestRoute';

const Routes = () => {
    return (
<div className = "container bwm-container">  
    <Switch>
    <Route exact path="/">
    <RentalHome/>
    </Route>

    <Route path="/rentals/:id">
    <RentalDetail/>
    </Route>

    <AuthRoute path="/secret">    
    <SecretPage />
    </AuthRoute>

    <GuestRoute path="/login">
      <Login /> 
    </GuestRoute>
      

    <GuestRoute path="/register">
      <Register /> 
      </GuestRoute>
</Switch>
 </div>

    )
}

export default Routes;


// notes  exact is react keyword is used to navigate page 
// container is react compnent to store all the childering(pages)
// swtich and route is imported from react dom , need to install the  react rounter dom before using this, ths is used for navigation withen page whiout having to refresh the page
