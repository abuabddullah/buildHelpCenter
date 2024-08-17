const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const errorHandler = require("./middleware/errorHandler");


// Ping endpoint to check server status
app.get('/ping', (req, res) => res.send('Server is running'));

// Define routes here later...

//Route imports
const cardRouter = require("./routes/cardRoutes");



//invoking routes
app.use('/', cardRouter);







// Error handling middleware
app.use(errorHandler);

// Not found route
app.all("*", (req, res) => {
    res.send("NO route found.");
});
module.exports = app;