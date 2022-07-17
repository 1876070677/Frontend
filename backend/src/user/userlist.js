const pool = require('../../database/database');
const sql = "SELECT * from accounts;"

async function userList(req, res) {
    var result = {}
    const conn = await pool.getConnection();
    try {
        const select = await conn.query(sql);
        result.message = "Success";
        result.code = 0
        result.content = select[0]
    } catch(err) {
        result.message = "Failed";
        result.code = 1
        result.content = err
    } finally {
        conn.release();
    }
    res.json(result);
}

module.exports = {
    userList : userList
}