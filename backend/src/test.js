async function test(req, res) {
    console.log(req.header('User-Agent'));
    res.send("Testing!!");
}

module.exports = {
    test : test
}