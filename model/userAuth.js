const axios = require('axios');

const wx_url = 'https://api.weixin.qq.com/sns/jscode2session';
const APPID = 'wx0d395d86a3d2a446';
const SECRET = '9150c070a699ac77e97f04e56d25453e'

let userAuth = {
  getOpenid: function(code, callback) {
    axios({
    url: wx_url,
    params: {
      appid: APPID,
      secret: SECRET,
      js_code: code,
      grant_type: 'authorization_code'
    }
    }).then(res => {
      console.log(res);
      callback(res);
    }).catch(err => {
      console.log(err);
    })
  }
}

// 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code'

module.exports = userAuth;