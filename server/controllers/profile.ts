
import User from "../models/user";
import Profile from '../models/profile';
import BaseCtrl from './base';

export default class ProfileCtrl extends BaseCtrl {
  model = Profile;

   
   getByUserid = (req, res) => {
    this.model.findOne({ userid: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  updateByUserid = (req, res) => {
    this.model.findOneAndUpdate({userid : req.params.id },req.body, (err, item1) => {
      if (err) { return console.log(err); }
      console.log(item1);
      res.status(200).json(item1);
    });
  }

  updatePropicByUserid = (req, res) => {
    this.model.findOneAndUpdate({userid : req.params.id },req.body, (err, item1) => {
      if (err) { return console.log(err); }
      console.log(item1);
      res.status(200).json(item1);
    });
  }

  // updateByUserid = (req, res) => {
  //   this.model.findOneAndUpdate({ userid : req.params.id },req.body,{ $set: { fname : req.body.fname, lname: req.body.lname, dateofbirth : req.body.dateofbirth, placeofbirth : req.body.placeofbirth, timeofbirth : req.body.timeofbirth, raasi : req.body.raasi, nakshatram : req.body.nakshatram, street : req.body.street, city : req.body.city, pin : req.body.pin, state : req.body.state }}, { upsert: true, new: true }, (err, item1) => {
  //     if (err) { return console.log(err); }
  //     console.log(item1);
  //     res.status(200).json(item1);
  //   });
  // }
}
