import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URI
});

const client = await pool.connect()
await client.query('SELECT NOW()')
client.release() 