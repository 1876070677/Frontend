const jwt = require("./jwt");
const TOKEN_NOT_EXIST = -1;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authcheck = {
    checkToken: async (req, res, next) => {
        var token = req.signedCookies.actk;

        if (token === undefined) {
            return res.json({code : TOKEN_NOT_EXIST, message : "Not Exist Token"})
        }
        else {
            const user = await jwt.verify(token);
            
            if (user === TOKEN_INVALID)
                return res.json({code : -2, message : "Token INVALID"});
            else if (user === TOKEN_EXPIRED) {
                return res.json({code : -3, message : "Token EXPIRED"})
            }
            req.id = user.idx
            req.nickname = user.nicknamex
            next();
        }
    }
}

module.exports = authcheck;