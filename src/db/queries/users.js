import { pool } from "../index.js"

// Finding a user by email
const findUserByEmail = async (email) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    } catch (error) {
        console.error('Error finding user by email:', error);
        throw error;
    }
};

// Finding a user by ID
const findUserById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error finding user by ID:', error);
        throw error;
    }
};

// Inserting
const insertUser = async (full_name, email, hash_password) => {
    // RETURNING * =  allows you to get the inserted row back immediately
    const query = `
        INSERT INTO users (full_name, email, hash_password)
        VALUES ($1, $2, $3)
        RETURNING * 
    `
    try {
        const result = await pool.query(query, [full_name, email, hash_password]);
        return result.rows[0];
    } catch (error) {
        console.error('Something went wrong:', error);
        throw error;
    }
}

// Retrieving all
const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY created_at DESC', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Retvieving one
const getUser = (req, res) => {
    const id = req.params.id
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

// Updating


export { findUserByEmail, findUserById, insertUser, getUsers, getUser }