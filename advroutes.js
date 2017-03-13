//image part to be done
var multer  =   require('multer');
var fs = require('fs');
var express = require('express');
var http = require("http");
// var app = express();
//
// function uploadimage(res,fileno) {
//   try {
//       fs.mkdirSync('upload/'+fileno+'/');
//       console.log('Directory ' + fileno + ' created');
//     } catch (e) {
//       if(e.code == 'EEXIST')
//         console.log('Directory Already Exists');
//       else
//         console.log(e);
//     }
//     var upload = multer({dest:'upload/'+fileno+'/'})
//     upload.single('file');
// var options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/imageUp/',
//   method: 'POST',
// };
// var req = http.request(options, function(res) {
//   console.log('Status: ' + res.statusCode);
//   res.setEncoding('utf8');
//   res.on('data', function (body) {
//     console.log('Body: ' + body);
//   });
// });
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
// write data to request body
//req.write('{"string": "Hello, World"}');
//req.end();

// app.post('/imageUp/',upload.single('file'),function(req,res) {
//   res.send(req.file);
// });
    //router.post('/imageUp',upload.any(),function(req,res,next) {
    //  res.send(req.files);
    //});
//};

//module.exports.upImage = uploadimage;

var upld = multer({dest:'upload/'})

module.exports = {
    upload:function(app) {
          app.post('/imageUp/:fileno',upld.single('file'),function(req,res,next) {

            res.send(req.file);
          });
    }
}
