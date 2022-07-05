var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { 
        type: String,  
        required: true, 
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
        }, 
    is_deleted: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('User', userSchema);