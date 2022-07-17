const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretKey;
const options = require('../config/secretkey').options;
const refreshOptions = require('../config/secretkey').refreshOptions;

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
    sign: async (user) => {
        const payload = {
            idx : user.id,
            nicknamex : user.nickname,
        };

        const result = {
            token : jwt.sign(payload, secretKey, options),
        }
        return result;
    },
    rfsign: async (user) => {
        const payload = {
            idx : user.id,
        }

        const result = {
            token : jwt.sign(payload, secretKey, refreshOptions),
        }
        return result;
    },
    verify: async (token) => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log("invalid token");
                return TOKEN_INVALID;
            }
        }
        return decoded;
    }
}