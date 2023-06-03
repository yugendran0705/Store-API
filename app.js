require('dotenv').config();

const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
const connectDB = require('./db/connect');

app.use(errorMiddleware)
app.use(express.json());
app.use(notFoundMiddleware)

app.use('/api/v1/products', require('./routes/products'))


const port = process.env.PORT || 3000;

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