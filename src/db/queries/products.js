import { pool } from "../index.js"

const getProducts = (req, res) => {
    pool.query('SELECT * FROM products ORDER BY created_at DESC', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}


