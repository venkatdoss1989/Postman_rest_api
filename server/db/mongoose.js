const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mySecondDb',{useNewUrlParser : true});


module.exports = {
    mongoose : mongoose
}