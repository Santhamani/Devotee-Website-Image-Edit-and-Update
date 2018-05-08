


import * as mongoose from 'mongoose';

const profileimageSchema = new mongoose.Schema({
  
  
  // path: {
  //   type: String,
  //   required: true,
  //   trim: true
  //   },
  //   originalname: {
  //   type: String,
  //   required: true
  //   }
  profilepic: String,
  userid: String,
  // userid : {type : mongoose.Schema.Types.ObjectId, ref: 'User' ,required: true },
  // eventid : String,

});

const ProfileImage = mongoose.model('ProfileImage', profileimageSchema);

export default ProfileImage;