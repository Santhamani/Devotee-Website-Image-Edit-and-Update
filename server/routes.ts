import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';
import Rat from './models/rat';
import RatCtrl from './controllers/rat';
import Vendor from './models/vendor';
import VendorCtrl from './controllers/vendor';
import VendorBank from './models/vendorbank';
import VendorBankCtrl from './controllers/vendorbank';
import Profile from "./models/profile";
import ProfileCtrl from "./controllers/profile";
import RelationCtrl from './controllers/relation';
import ProfileImageCtrl from './controllers/profileimage';
import ProfileImage from './models/profileimage';
import nodemailer from 'nodemailer';
import * as path from 'path';
import * as multer from 'multer';
import * as bodyParser from 'body-parser';


export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const ratCtrl = new RatCtrl();
  const vendorCtrl = new VendorCtrl();
  const vendorbankCtrl = new VendorBankCtrl();
  const profileCtrl = new ProfileCtrl();
  const relationCtrl = new RelationCtrl();
  const profileimageCtrl = new ProfileImageCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // // Rats
  router.route('/rats').get(ratCtrl.getAll);
  router.route('/rats/count').get(ratCtrl.count);
  router.route('/rat').post(ratCtrl.insert);
  router.route('/rat/:id').get(ratCtrl.get);
  router.route('/rat/:id').put(ratCtrl.update);
  router.route('/rat/:id').delete(ratCtrl.delete);

  // Vendor
  router.route('/vendors').get(vendorCtrl.getAll);
  router.route('/vendors/count').get(vendorCtrl.count);
  router.route('/vendor').post(vendorCtrl.insert);
  router.route('/vendor/:id').get(vendorCtrl.get);
  router.route('/vendor/:id').put(vendorCtrl.update);
  router.route('/vendor/:id').delete(vendorCtrl.delete);

  // Vendor Bank
  router.route('/vendorbanks').get(vendorbankCtrl.getAll);
  router.route('/vendorbanks/count').get(vendorbankCtrl.count);
  router.route('/vendorbank').post(vendorbankCtrl.insert);
  router.route('/vendorbank/:id').get(vendorbankCtrl.get);
  router.route('/vendorbank/:id').put(vendorbankCtrl.update);
  router.route('/vendorbank/:id').delete(vendorbankCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Profile Details
  router.route('/profiles').get(profileCtrl.getAll);
  router.route('/profiles/count').get(profileCtrl.count);
  router.route('/profile').post(profileCtrl.insert);
  router.route('/getprofile/:id').get(profileCtrl.getByUserid);
  // router.route('/profile/:userid').get(profileCtrl.getuserid);
  // router.route('/profile/:userid').get(profileCtrl.getid);
  router.route('/updateprofile/:id').put(profileCtrl.updateByUserid);
  router.route('/profile/:id').delete(profileCtrl.delete);
 
  //relations
  router.route('/relation').post(relationCtrl.insert);
  router.route('/getrelations').get(relationCtrl.getAll);
  router.route('/relation/:id').get(relationCtrl.get);

  //profile pic
  router.route('/createprofilepic').post(profileimageCtrl.insert);
  router.route('/updateprofilepic/:id').put(profileimageCtrl.updateImageByUserid);
  router.route('/getprofilepic/:id').get(profileimageCtrl.getProfilePicByUserid);
  

    router.post('/upload', (req, res) => {
      upload(req, res, (err) => {
        if(err){
          console.log(err);
          res.status(204).json({ 
            success : false,
            message : 'error'
            
          });
        } else {
          if(req.file == undefined){
            res.status(401).json({ 
              success : false,
              message : 'file undefined'
            });
          } else {
            res.status(200).json({ 
              success : true,
              msg: 'File Uploaded',
              file: `assets/public/uploads/${req.file.filename}`
            });
          }
        }
    });
  });
  



const storage = multer.diskStorage({
  destination: './src/assets/public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 5000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('image');


function checkFileType(file, cb){
 
  const filetypes = /jpeg|jpg|png|gif/;
 
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
 
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: 'dummymail2468@gmail.com',
//       pass: 'dummy2468'
//   }
//   });

// Sendmail
// router.post('/sendemail',function(req,res){
  
//   // var attachment = (typeof req.body.attachment !="undefined") ? req.body.attachment : '';
//   var mailOptions = {
//        from: "dummymail2468@gmail.com",
//        to: req.body.to,
//        subject: req.body.subject,
//        html: req.body.text,

//     } 
  
//     transporter.sendMail(mailOptions, function(error, info){
//        if(error){
//       res.json({status: 'error'});
//      }else{
//       res.json({status: 'success'});
//      };
//     });
//    });


//hostavatar

// router.post('/uploadHostAvatar', (req, res) => {
//   uploadHostAvtar(req, res, (err) => {
//     if(err){
//       console.log(err);
//       res.status(204).json({ 
//         success : false,
//         message : 'error'
        
//       });
//     } else {
//       if(req.file == undefined){
//         res.status(401).json({ 
//           success : false,
//           message : 'file undefined'
//         });
//       } else {
//         res.status(200).json({ 
//           success : true,
//           msg: 'File Uploaded',
//           file: `assets/public/uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });

// const uploadHostAvtar = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
//   fileFilter: function(req, file, cb){
//     checkFileType(file, cb);
//   }
// }).single('HostAvatar');


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

  
}
