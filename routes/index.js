
var User = require('../models/user');
exports.add=function(req,res){
var user = new User({
    name:'urname',
    password:'password'
});
user.save(function (err, user) {
        if(!err) {
            console.log(user);
            res.redirect('/')
        }
    });
console.log(user);
};
exports.show=function(req,res){
User.find(function(err,doc){
res.json(doc)});
};
