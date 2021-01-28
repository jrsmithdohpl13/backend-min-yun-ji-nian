const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req, res) => {
  res.send({
    code: 10000
  });
})

app.get('/api/login', require('./routes/login'));

app.listen(3001,() => {
  console.log('3001端口启动成功');
})