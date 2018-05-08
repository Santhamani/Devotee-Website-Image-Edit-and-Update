

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userid : {type: String, required: true},
    // bookingid : {type: String, required: true},
    // eventid : {type: String, required: true},
    // hostid : {type: String, required: true},
    profileid : {type: String, required: true},
    
});



const Relation = mongoose.model('Relation', schema);

export default Relation;