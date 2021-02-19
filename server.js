// Dependencies
const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


//Instnatiate server
const app = express();
const PORT = process.env.PORT || 3000;

//--- Middleware functions ---//
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json()); 

// make files readily available
app.use(express.static('public'));

// Routes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Start server
app.listen(PORT, function () {
    console.log(`Server now on port ${PORT}!`)
})