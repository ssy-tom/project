var express = require('express');
// const client=require("../sql/mysql_login");
var client =require('../sql/mysql_login');
const teacher=require("../sql/teacher");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(teacher_data)
  // res.render('index', { title: 'Express' });
  teacher.teacher_data(res);
});

module.exports = router;
