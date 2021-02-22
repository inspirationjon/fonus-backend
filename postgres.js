const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'mydb1',
    user: 'postgres',
    password: 'ilhom55',
    port: 5000,
})

const fetch = async (SQL, ...params) => {
    const client = await pool.connect()

    try {
        const { rows } = await client.query(SQL, params.length ? params : null)

        return rows
    } finally {
        client.release()
    }
}
const fetchOnly = async (SQL, ...params) => {
    const client = await pool.connect()

    try {
        const {
            rows: [row],
        } = await client.query(SQL, params.length ? params : null)

        return row
    } finally {
        client.release()
    }
}

module.exports = { fetch, fetchOnly }
