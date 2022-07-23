const pool = require('../database/database');
const sql = "SELECT start, end, componey, name, content, tech FROM ACT;";

async function act(req, res) {
    console.log("로그");
    const conn = await pool.getConnection();

    let result = {};

    try {
        const select = await conn.query(sql);
        result.code = 0;
        result.content = select[0];
    } catch(err) {
        result.code = 1;
        result.message = err;
    } finally {
        conn.release();
        return res.send(result);
    }
}

module.exports = {
    act : act
}