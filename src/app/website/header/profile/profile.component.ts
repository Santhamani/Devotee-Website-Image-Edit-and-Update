import ProfileImage from '../../../../../server/models/profileimage';


import { Component, OnInit,  Directive, Input, ViewChild } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Relation } from "../../shared/models/relation";
import { Profile } from "../../shared/models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  // event: any;
  user: User;
  profile: Profile;
  newPost = false;
  currentUser: User = new User();
  currentEmail: User = new User();
  // user : User = new User();
  users: User[] = [];
  profiles: Profile[] = [];
  // relation: Relation[] = [];
  // isLoading = true;


  @ViewChild('fileInput') fileInput;

  constructor(
    public auth: AuthService,
    public authService: LoginService,
    public profileService: ProfileService,
    public userService: UserService,
    private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute,
    public toast: ToastComponent,
    private formBuilder: FormBuilder,
    private _route : ActivatedRoute
  ) { }

  profileForm: FormGroup;
  fname = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  lname = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  dateofbirth = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  placeofbirth = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  timeofbirth = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  raasi = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  nakshatram = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  houseno = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  street = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  city = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  pin = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  state = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  phoneno = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    // Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  
  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }

  
ngOnInit() {

  
    const userid = localStorage.getItem('userid');
    const id = this._route.snapshot.params.id;
    const user_id = this._route.snapshot.params.userid;
    // const eventid = id;

    this.profileForm = this.formBuilder.group({
      fname: this.fname,
      lname: this.lname,
      phoneno: this.phoneno,
      dateofbirth : this.dateofbirth,
      placeofbirth : this.placeofbirth,
      timeofbirth : this.timeofbirth,
      raasi : this.raasi,
      nakshatram : this.nakshatram,
      houseno : this.houseno,
      street : this.street,
      city : this.city,
      pin : this.pin,
      state : this.state,
      userid,
      // eventid
    });

    this.getProfileImage();
  }

  setClassFName() {
    return { 'has-danger': !this.fname.pristine && !this.fname.valid };
  }

  setClassLName() {
    return { 'has-danger': !this.lname.pristine && !this.lname.valid };
  }

  setClassDateOfBirth() {
    return { 'has-danger': !this.dateofbirth.pristine && !this.dateofbirth.valid };
  }

  setClassTimeOfBirth() {
    return { 'has-danger': !this.timeofbirth.pristine && !this.timeofbirth.valid };
  }

  setClassPlaceOfBirth() {
    return { 'has-danger': !this.placeofbirth.pristine && !this.placeofbirth.valid };
  }

  setClassRaasi() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  setClassNakshatram() {
    return { 'has-danger': !this.nakshatram.pristine && !this.nakshatram.valid };
  }

  setClassHouseNo() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  setClassStreet() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  setClassCity() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  setClassPin() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  setClassState() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }
  setClassPhoneno() {
    return { 'has-danger': !this.raasi.pristine && !this.raasi.valid };
  }

  addprofile() {
    this.profileService.addprofile(this.profileForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        console.log(this.profileForm);
        this.router.navigate(['/update-profile']);
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }

  selectedFile : any;
  filesToUpload : any;
  uploadedFiles: any[] = [];
  propic : any;
  result : any;
  resp : any;
  proimage : any;
  
  
  onFileSelected(event){
      
    console.log(event);
     
      this.selectedFile = event.srcElement.files[0];
      if (event.srcElement.files && event.srcElement.files[0]) {
        var reader = new FileReader();
    
        reader.onload = (event:any) => {
          this.propic = event.srcElement.result;
        }
    
        reader.readAsDataURL(event.srcElement.files[0]);
      }   
      
  }
  
  onUpload(){
      const formData:FormData = new FormData();
      
  
          formData.append('image', this.selectedFile, this.selectedFile.name );
          this.uploadedFiles = this.selectedFile;
          const id = localStorage.getItem('userid');
          this.http.post('http://localhost:3000/api/upload',formData)
                  .subscribe(res=>{
                    this.result = res;
                    this.propic = this.result.file;
                    this.profileImage(this.propic);
                  });
  }

  // let fileBrowser = profileImage;
  // if (fileBrowser.files && fileBrowser.files[0]) {
    // const formData = new FormData();
    // formData.append("image", fileBrowser.files[0]);
    // this.http.post('http://localhost:3000/api/upload',formData)
    //               .subscribe(res=>{
    //                   this.propic = res;
    //               });
  // }

  
profileImage(propic) {

  const id = localStorage.getItem('userid');
  const body = { "profilepic" : propic, id};
  this.userService.getProfilePic(id).subscribe(res => {
    if(res === null){
      this.userService.createProfilePic(propic).subscribe(res => {
        console.log(res);
      });
    } 
    else {
      this.userService.updateProfilePic(propic).subscribe(res => {
        console.log(res);
      });
    }
  });
 }

 getProfileImage(){

  const id = localStorage.getItem('userid');
   this.userService.getProfilePic(id).subscribe( res => {
     console.log(res);
     this.resp = res;
         this.proimage = this.resp.profilepic;
   })
 }
  
  
}
