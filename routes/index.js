var request = require('superagent');

/* GET home page. */
exports.index = function(req, res){
  res.render('index');
};

exports.signup= function (req, res) {
  var mailchimpInstance   = 'us14';
  var listUniqueId        = '6909b1562d';
  var mailchimpApiKey     = 'd99bb58886e5afeb7148343701e8c6e3-us14';
  request
    .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
    .send({
      "email_address": req.body.Email,
      "status": "subscribed",
      "NAME": req.body.Name
    })
    .end(function(err, response) {
      res.send(response.status);
  });
};


