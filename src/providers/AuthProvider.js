import React from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthenticated } from 'actions';
import jwt from 'jsonwebtoken';
import moment from 'moment';  // install moment library npm install --save moment 

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

  const checkAuthState = () => {
    //alert('Checking Auth State remove this msg from AuthProvider');   //this is use to display user statatus if login everytime you refresh the page
    const decodedToken = decodeToken(getToken());
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {  // if the token or session is still not expire 
      dispatch(userAuthenticated(decodedToken))
        }
     }

     // function for checking authenticated users to give access to secret page //
    const isAuthenticated = () => {
      const decodedToken = decodeToken(getToken());
    return decodedToken && isTokenValid(decodedToken)
    }

    const isTokenValid = (decodedToken) => {
      return decodeToken && moment().isBefore(getExpiration(decodedToken));
    }
    //  end of checking authenticated users to give access to secret page //




   const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  }

  const getToken = () => {
    return localStorage.getItem('bwm_token');
  }

  const decodeToken = token => {
    return jwt.decode(token);
  }

  const signOut = () => {                //signout
    localStorage.removeItem('bwm_token');
    dispatch({type: 'USER_SIGNED_OUT'});
  }


  const signIn = (loginData) => {       // signin
    return loginUser(loginData)
      .then(token => {
        localStorage.setItem('bwm_token', token);
        const decodedToken = decodeToken(token);
        dispatch(userAuthenticated(decodedToken))
        return token;
      })
  }

  const authApi = {
    signIn,
    checkAuthState,
    signOut,
    isAuthenticated  
  }

  return (
    <AuthContext.Provider value={authApi}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
}

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {authApi => <Component {...props} auth={authApi} /> }
  </AuthContext.Consumer>
)