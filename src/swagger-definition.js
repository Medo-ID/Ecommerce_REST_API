export default {
    openapi: '3.0.0',
    info: {
        title: 'E-commerce API',
        version: '1.0.0',
        description: 'API documentation for an e-commerce platform',
		contact: {
			url: "https://medo7id.com",
			email: "midaghdour@gmail.com"
		}
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'User ID' },
                    username: { type: 'string', description: 'Username' },
                    email: { type: 'string', description: 'User email' },
                    password: { type: 'string', description: 'User password' },
                    created_at: { type: 'string', format: 'date-time', description: 'Creation timestamp' },
                    updated_at: { type: 'string', format: 'date-time', description: 'Update timestamp' },
                },
            },
            Product: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'Product ID' },
                    name: { type: 'string', description: 'Product name' },
                    price: { type: 'number', description: 'Product price' },
                    description: { type: 'string', description: 'Product description' },
                },
            },
            Cart: {
                type: 'object',
                properties: {
                    user_id: { type: 'integer', description: 'User ID' },
                    product_id: { type: 'integer', description: 'Product ID' },
                    quantity: { type: 'integer', description: 'Quantity of the product in the cart' },
                },
            },
            Order: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'Order ID' },
                    user_id: { type: 'integer', description: 'User ID' },
                    total_amount: { type: 'number', description: 'Total order amount' },
                    status: { type: 'string', description: 'Order status' },
                    created_at: { type: 'string', format: 'date-time', description: 'Order creation timestamp' },
                    updated_at: { type: 'string', format: 'date-time', description: 'Order update timestamp' },
                },
            },
            OrderItem: {
                type: 'object',
                properties: {
                    order_id: { type: 'integer', description: 'Order ID' },
                    product_id: { type: 'integer', description: 'Product ID' },
                    quantity: { type: 'integer', description: 'Quantity ordered' },
                    unit_price: { type: 'number', description: 'Price per unit' },
                },
            },
        },
    },
};