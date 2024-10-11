import { pool } from "../index.js"

// Inserting

// Retrieving all
const getProducts = (req, res) => {
    pool.query('SELECT * FROM products ORDER BY created_at DESC', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Retvieving one
const getProduct = (req, res) => {
    pool.query('SELECT * FROM products ORDER BY created_at DESC', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Updating