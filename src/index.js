import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes
import { authRouter } from './routes/auth.js';
import { userRouter } from './routes/user.js';
import { productRouter } from './routes/product.js';
import { cartRouter } from './routes/cart.js';
import { orderRouter } from './routes/order.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// main route
app.get('/', (req, res) => {
    res.status(200).send("Hello, this is the main route")
});

// use the nested routes
app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);

// Error handling
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err); // Delegates to the next error-handling middleware if headers are already sent
    }
    console.error(err.stack)
    res.status(500).send('Something Broke! - Lets Start the feixing.')
});

app.listen(port, () => {
    console.log(`Server is running using the port ${port}`)
});

