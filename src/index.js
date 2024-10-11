import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

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
    console.error(err.stack)
    res.status(500).send('Something Broke! - Lets Start the feixing.')
});

app.listen(port, () => {
    console.log(`Server is running using the port ${port}`)
});

