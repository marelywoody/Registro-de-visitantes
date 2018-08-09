var api_key = '77835e675caf767b3a97c0aedb75d419-7efe8d73-442179d7';
var domain = 'sandboxd8761d035371470b9d4dbe77d30ff306.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key,
domain: domain });

var data = {
  from: 'Excited User <lorena.pratts@gmail.com>',
  to: 'pruebamarelyhdz@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, function(error, body) {
  console.log(body);
});