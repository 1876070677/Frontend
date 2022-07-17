async function userInfo (req, res) {
    result = {}
    result.code = 0;
    result.message = "Success";
    result.nickname = req.nickname;    

    res.json(result);
}

module.exports = {
    userInfo : userInfo
}