
//const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
 '/api',
 createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true
    })
   )
 }

 // http://localhost:3000/api/v1/rentals ------> 
 //this reqeust will go to http://localhost:3001/api/v1/rentals