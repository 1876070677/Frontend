const pool = require('../../database/database');
const sql = "SELECT password, nickname FROM accounts WHERE id = ?;";
const rftkSql = "UPDATE accounts SET rftk=? WHERE id = ?";
const jwt = require('../../auth/jwt');

async function userLogin(req, res) {
    result = {}
    let { id, password } = req.body

    var param = [id];
    const conn = await pool.getConnection();

    try {
        const select = await conn.query(sql, param);
        if (select[0].length == 0) {
            result.message = "User id Not Exists"
            result.code = 2
        }
        else if (password === select[0][0].password) {
            //transaction
            await conn.beginTransaction();
            result.message = "Login Success";
            result.code = 0
            var expiryDate = new Date( Date.now() + 3 * 60 * 1000); // 24 hour 14일
            const actk = await jwt.sign({id : id, nickname : select[0][0].nickname});
            
            const rftk = await jwt.rfsign({id : id});
            const insert = await conn.query(rftkSql, [rftk.token, id]);
            result.rftk = rftk.token;
            result.nickname = select[0][0].nickname;
            res.cookie('actk', actk.token, {
                expires: expiryDate,
                httpOnly: true,
                signed: true,
                //secure: true
            });
            //res.json(result);
            await conn.commit();
            // res.write(result);
            // res.end();
        } else if (password != select[0][0].password) {
            result.message = "Password Not Matched"
            result.code = 1
        }
    } catch(err) {
        await conn.rollback();
        result.message = "Login Process Failed"
        result.code = 3
        console.log(err);
    } finally {
        conn.release();
        res.json(result);
    }
}

module.exports = {
    userLogin : userLogin
}