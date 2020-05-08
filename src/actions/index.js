import axios from 'axios';

export const extractApiErrors = (resError) => {    // function to extract error catch and display when registering and redirected to login page 
    let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];
  
    if (resError && resError.data && resError.data.errors) {
      errors = resError.data.errors;
    }
  
    return errors;
  }

export const fetchRentals =() => dispatch => {
    axios.get('/api/v1/rentals')
    .then (res=> {
        const rentals = res.data;
        dispatch({
            type: 'FETCH_RENTALS',
            rentals
        });
      })
    }
    
export const fetchRentalById =rentalId => async dispatch => {
    dispatch({type: 'IS_FETCHING_RENTAL'});
   const res = await axios.get(`/api/v1/rentals/${rentalId}`)
   dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
    });
 }
  
export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL', 
        rental 
    }

}

// AUTH ACTIONS    - this  func is to post the register information to the db
// incase of error see extractAPI error func  above to handle  

export const registerUser = (registerData) => {
    return axios
      .post('/api/v1/users/register', registerData)
      .catch(error => Promise.reject(extractApiErrors(error.response || {})))
      
  }


  // handle login actions 

  export const loginUser = (loginData) => {
    return axios
      .post('/api/v1/users/login', loginData)
      .then(res => res.data)
      .catch(error => Promise.reject(extractApiErrors(error.response || {})))
 
    }

    export const userAuthenticated = (decodedToken) => {
      return {
        type: 'USER_AUTHENTICATED',
        username: decodedToken.username || ''
      }
}


