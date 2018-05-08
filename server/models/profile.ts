

import * as mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phoneno: Number,
  dateofbirth: String,
  placeofbirth: String,
  timeofbirth: String,
  raasi: String,
  nakshatram: String,
  houseno: String,
  street: String,
  city: String,
  pin: Number,
  state: String,
  userid: String,
  profilepic: String,
  // userid : {type : mongoose.Schema.Types.ObjectId, ref: 'User' ,required: true },
  // eventid : String,

});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;