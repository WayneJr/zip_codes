// Get all the important values that would be required to 
// set up the environment
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Set up the route which the server will listen on
const routes = require('./api/routes');
routes(app);
app.listen(port, () => {
    console.log('Started server on port: ' + port);
    

});
