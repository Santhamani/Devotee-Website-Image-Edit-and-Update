import * as mongoose from 'mongoose';

const ratSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
  });

  const Rat = mongoose.model('Rat', ratSchema);

  export default Rat;