const pool = require('../../database/database');
const sql = "INSERT INTO accounts (id, password, nickname) VALUES(?, ?, ?);"
async function userRegister(req, res) {
    var result = {}
    let { id, password, nickname } = req.body
    var param = [id, password, nickname]
    const conn = await pool.getConnection();
    try {
        const insert = await conn.query(sql, param);
        result.message = "Register Success";
        result.code = 0
        result.content = insert[0]
    } catch(err) {
        result.message = "Register Failed!";
        result.code = 1
        result.content = err
    } finally {
        conn.release();
    }
    res.json(result);
}

module.exports = {
    userRegister : userRegister
}