const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/build/static'))

app.get('*',function(req, res){
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(3000);

console.log('Running at Port 3000');