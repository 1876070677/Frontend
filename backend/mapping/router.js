var express = require('express');
var router = express.Router();

const {test} = require('../src/test');

const {act} = require('../src/act');

// access token 인증
const authcheck = require('../auth/auth').checkToken;
const {refresh} = require('../auth/refresh');

const {userInfo} = require('../src/user/userInfo');
const {userList} = require('../src/user/userlist');
const {userRegister} = require('../src/user/register');
const {userLogin} = require('../src/user/login');

router.get('/test', test);

router.get('/act', act);

router.post('/refresh', refresh);

router.get('/userinfo', authcheck, userInfo);
router.get('/userlist', authcheck, userList);
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);

module.exports = router;