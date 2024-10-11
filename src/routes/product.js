import express from 'express';

export const productRouter= express.Router();

// Get products
productRouter.get('/', (req, res) => {
    res.status(200).send('This is all products')
});

// Get products by category
productRouter.get('/category', (req, res) => {
    const category = req.query.name;
    const categoryIds = ['1', '2', '3', '4'];
    if (category && categoryIds.includes(category)) {
        res.status(200).send('This is product with category name: ' + category)
    } else {
        console.log(category)
        res.status(404).send('category not found')
    }
});

// Get product
productRouter.get('/:id', (req, res) => {
    res.status(200).send('This is product with ID: ' + req.params.id)
});

