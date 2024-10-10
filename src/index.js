// imports
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

// setup app
const app = express();

// config app
app.use(cors())

// routes
app.get('/', (req, res, next) => {
    res.status(200).send('this is home')
})

// run server
const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`Server is running in the port ${PORT} ...`),
);
