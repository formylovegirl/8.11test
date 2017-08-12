/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require("fs");

fs.readFile('./input.txt', 'utf-8', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString().split('\n').length);
});