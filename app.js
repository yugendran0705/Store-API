const express = require('express');
const app = express();
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
require('express-async-errors');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

app.use(express.json());

require('dotenv').config();

app.use('/api/v1/products', productsRouter)

app.use(errorHandlerMiddleware)
app.use(notFound)


const port = process.env.PORT;

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI);
        console.log('Database connected');
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();