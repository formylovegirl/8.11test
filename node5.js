/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs');
var path = require('path')
fs.readdir('test',function (err,list) {
    list.forEach(function (file) {
        if(path.extname(file)==='.'+ 'txt')
            console.log(file)
    })
})