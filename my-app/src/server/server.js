const express = require("express");
const sql = require("mssql");
const cors = require('cors');
const app = express();
const PORT = 5000;

// MSSQL 연결 설정
const config = {
    server: 'sql19-001.cafe24.com', // 데이터베이스 서버 주소
    database: 'sonbs99', // 데이터베이스 이름
    user: 'sonbs99', // 데이터베이스 유저 이름
    password: 'dltjsgml!1', // 데이터베이스 유저 비밀번호
    options: {
        encrypt: true, // 암호화 사용 여부
        trustServerCertificate: true // 서버 인증서 검증 여부
    }
};

app.use(cors());

app.get('/api/news', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM news');
        res.json(result.recordset); // recordset으로 결과를 JSON 형태로 변환하여 응답
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});
