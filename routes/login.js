const userAuth = require('../model/userAuth');
const getOpenid = userAuth.getOpenid;

module.exports = (req, res) => {
  console.log(req.query);
  getOpenid(req.query.code, function(data) {
    console.log(data);
    res.send({
      session_key: data.data.session_key,
      openid: data.data.openid
    });
  });
}