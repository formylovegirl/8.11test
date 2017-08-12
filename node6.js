/**
 * Created by Administrator on 2017/8/12.
 */
var node6 = require('./node6(2)');
var dir = process.argv[2];
var filter = process.argv[3]
node6(dir,filter,function (err,list) {
    if (err){
        return console.error('Error:'+ err);
    }
    list.forEach(function (file) {
        console.log(file)
    })
})
