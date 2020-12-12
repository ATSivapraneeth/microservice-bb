var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  
const { response } = require('../app');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process2', urlencodedParser, function (req, res) {  
   var Blood_Group = req.body.bgroup; 
   var name= req.body.rname;
   var result;
  if(Blood_Group=='A' || Blood_Group=='B' || Blood_Group=='O' || Blood_Group=='AB')
    result = 'Blood group is available';
  else  
    result = 'Blood group not available';

   res.render('response',  {name : name, message: result});
  
}); 

module.exports = router;
