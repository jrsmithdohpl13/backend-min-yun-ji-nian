const express = require('express');
const app = express();

app.use('/',(req, res) => {
  res.send('访问成功');
})

app.listen(3000,() => {
  console.log('3000端口启动成功');
})