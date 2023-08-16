const express = require("express");
const {Pool} = require('pg');
const cors = require('cors');

const app = express();
const PORT = 5000;

const pool = new Pool({
    user: "postgres",
    host: process.env.POSTGRESQLHOST,
    database: "postgres",
    password: process.env.POSTGRESQLPASS,
    port: 5432
});

app.use(cors());

app.get('/api/news', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM news');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});


