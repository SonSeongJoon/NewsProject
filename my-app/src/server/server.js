// server.js

const express = require("express");
const sql = require("mssql");
const cors = require('cors');
const dbConfig = require('./dbConfig'); // dbConfig.js 파일에서 접속 정보 가져오기

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/news', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig); // dbConfig에서 가져온 접속 정보 사용
        const result = await pool.request().query('SELECT * FROM news');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});
