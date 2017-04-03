/**
 * Created by Administrator on 2017/4/2 0002.
 */
var client =require('./mysql_login');
console.log(client.client)
// let client = require('mysql').createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database:'school_manager'
// });
// client.connect()
// client.query("use school_manager", function (err) {
//     console.log(err);
//     // res.send('hello world');
// });
let teacher_data = function (res) {

    client.client.query(`select * from student` , function (err, data) {

        res.json(data);

    });
};
// client.end();
exports.teacher_data = teacher_data;