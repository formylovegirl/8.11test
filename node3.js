/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
 var data = fs.readFileSync('./input.txt')
console.log(data.toString().split('\n').length);