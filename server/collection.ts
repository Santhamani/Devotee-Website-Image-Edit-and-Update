const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatSchema = new Schema({
    title: String,
    age :Number
});

const CatSchema = new Schema ({
    title: String,
    age :Number,
    cat:[RatSchema]
});

const Cat = mongoose.model ('cat',CatSchema);

module.exports = Cat;