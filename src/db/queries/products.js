import { pool } from "../index.js"

// Retvieving products
const getProducts = (req, res) => {
    pool.query('SELECT * FROM products ORDER BY name', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Retrieving product
const getProduct = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Retrieving products by category
const getProductsByCategory = (req, res) => {
    const name = req.query.name
    const query = `
        SELECT p.id, p.name, p.description, p.price, p.stock, c.name AS category_name
        FROM products AS p
        JOIN categories AS c
        ON p.category_id = c.id
        WHERE c.name = $1
    `;
    pool.query(query, [name], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

export { getProducts, getProduct, getProductsByCategory }