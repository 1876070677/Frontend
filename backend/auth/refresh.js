const pool = require('../database/database');
const jwt = require('./jwt');
const sql = "SELECT rftk, nickname FROM accounts WHERE id = ?";
const rftkSql = "UPDATE accounts SET rftk=? WHERE id = ?";

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;
const TOKEN_NOT_EXIST = -1;

async function refresh(req, res) {
    const { rftk } = req.body;
    console.log(rftk);
    if (rftk === null) {
        return res.json({code: TOKEN_NOT_EXIST, message: "NOT Exist Refresh Token"});
    } else {
        const result = await jwt.verify(rftk);
        if (result === TOKEN_INVALID)
            return res.json({code : -2, message : "Token INVALID"});
        else if (result === TOKEN_EXPIRED) {
            return res.json({code : -3, message : "Token EXPIRED"})
        }

        const conn = await pool.getConnection();
        try {
            //transaction
            await conn.beginTransaction();

            const select = await conn.query(sql, [result.idx]);
            if (rftk === select[0][0].rftk) {
                // 가지고 있는 rftk값과 DB에 저장된 rftk값이 일치
                const newActk = await jwt.sign({id : result.idx, nickname : select[0][0].nickname})
                const newRftk = await jwt.rfsign({id : result.idx});

                const insert = await conn.query(rftkSql, [newRftk.token, result.idx]);
                var expiryDate = new Date( Date.now() + 30 * 60 * 1000); // 24 hour 14일
                res.cookie('actk', newActk.token, {
                    expires: expiryDate,
                    httpOnly: true,
                    signed: true,
                    //secure: true
                });
                await conn.commit();
                return res.json({code : 0, message : "New Token Sended", rftk : newTk.token})
            } else {
                return res.json({code : -2, message : "Token INVALID"})
            }
        } catch(err) {
            await conn.rollback();
            return res.json({code : -2, message : "Token INVALID"})
        } finally {
            conn.release();
        }
        
        
    }
}

module.exports = {
    refresh : refresh
}