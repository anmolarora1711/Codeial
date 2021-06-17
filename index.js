const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on the port: ${port}`);
});