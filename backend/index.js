//express 모듈 불러오기
const express = require("express");
// http 서버 오픈
const http = require('http');
// 쿠키 파서
const cookieParser = require('cookie-parser');
//express 사용
const app = express(); 
//cors 모듈 불러오기
const cors = require('cors');
const corsOpts = {
    origin : ['http://localhost:9090', 'https://blog.shbox.shop'],
    credentials : true
};

app.use(cookieParser('123sh87a#@!%^#!'));
app.use(cors(corsOpts));
app.use(express.json());
//app.use(static(__dirname))

/**
 * @path http://localhost:3000/ 경로
 */
var routerMapping = require('./mapping/router');
app.use('/', routerMapping);

// http listen port 생성 서버 실행
const webServer=http.createServer(app).listen(3007, () => {
    console.log(__dirname);
    console.log("http web server started");
})