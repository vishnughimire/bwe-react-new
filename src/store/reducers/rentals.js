


// what is Pure Function?
//Dont mutate arguments 
//No API calls, no route transication
// math.random()


const rentals = (state= [], action) => {

    switch(action.type) {
    case 'FETCH_RENTALS':
        return action.rentals;
    case 'CREATE_RENTAL':
        return [...state, action.rental];
    default:
        return state;

     }
        
 }

export default rentals;

