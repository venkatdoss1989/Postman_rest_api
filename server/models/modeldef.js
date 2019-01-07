const mongoose = require ('mongoose');


var MyModel = mongoose.model('MyModel', {
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true

    },
    age : {
        type : Number,
        default : null
    },
    isMarried : {
        type : Boolean,
        default : false
        
    },
    finishedAt : {
        type : Number,
        default : null
    }

});

module.exports = {
    MyModel : MyModel
}