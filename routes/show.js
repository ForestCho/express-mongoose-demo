var User = require('../models/user'); 
var user = new User({  
    name:'username',  
    password:'password'  
}); 
user.save(function (err, user) {  
        if(!err) {  
            console.log(user);  
            res.redirect('/')  
        }  
    });  
