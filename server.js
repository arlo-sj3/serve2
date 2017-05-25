var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('whtvruflllk');
});

app.use(express.static('public'));

app.get('/api',function(req, res){
  res.send('hey there')
})
