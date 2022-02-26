const path = require('path');
const express = require('express');
const app = express();

const { defaultErrorHandlerMiddleware } = require('./middlewares/errors/errorHandlerMiddleware');
const rootRouter = require('./routes/rootRoute');
const { notFoundHandler } = require('./middlewares/errors/notFoundHandler');


// set view engine
app.set('view engine', 'ejs');

// set middleware
app.use(express.static(path.join(__dirname, 'public')));

// use route 
app.use('/', rootRouter);

// 404 not found
app.use(notFoundHandler)

// default error handler
app.use(defaultErrorHandlerMiddleware);

app.listen(5000, () => {
    console.log('listening on port http://localhost:5000');
})