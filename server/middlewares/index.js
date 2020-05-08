// catching error coming from database and handling here and passing to end user while registering users 
// we have assign custom error msg under controller/user.js while resistering with below function we can catch the error that we asign in models/user.js inside model folder 

exports.provideErrorHandler = (req, res, next) => {

  res.sendApiError = config =>{    // error function
    const {status = 422, title, detail} =config;
    return res
    .status(status)
    .send({errors: [{title, detail}]})
}

    res.mongoError = dbError => {
      const normalizedErrors = [];
      const errorField = 'errors';
  
      if (dbError && 
        dbError.hasOwnProperty(errorField) && 
        dbError.name === 'ValidationError') {
          const errors = dbError[errorField];
          for (let property in errors) {
            normalizedErrors.push({title: property, detail: errors[property].message});
          }
      } else {
        normalizedErrors.push({title: 'Db Error', detail: 'Ooops, something went wrong!'});
      }
  
      return res.status(422).send({errors: normalizedErrors});
    }
  
    next();
  }