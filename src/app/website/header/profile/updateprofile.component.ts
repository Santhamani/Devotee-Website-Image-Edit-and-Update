

import { Component, OnInit,  Directive, Input, ViewChild } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Relation } from "../../shared/models/relation";
import { Profile } from "../../shared/models/profile.model";

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  // event: any;
  user: User;
  profile: any;
  // result : any;
  profiles: Profile[] = [];
  // relation: Relation[] = [];
  // isLoading = true;
  isEditing = false;

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
    // this.getUser();
    // this.getProfile();
  
  ngOnInit() {
    this.getProfileDetails();
    this.getProfileImage();
  }


  getProfileDetails(){

    const userid = localStorage.getItem('userid');
    const id = this._route.snapshot.params.id;
    // const user_id = this._route.snapshot.params.userid;

    this.profileService.getProfileDetails(userid).subscribe(
      data => {
        this.profile = data;
      console.log(data);
      }
    );
  }

  enableEditing(profile: Profile) {
    this.router.navigate(['/edit-profile']);
  }

  
  selectedFile : any;
  filesToUpload : any;
  uploadedFiles: any[] = [];
  propic : any;
  result : any;
  resp : any;
  proimage : any;
  
  
  onEditFileSelected(event){
      
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
  
  onEditUpload(){
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

//   let fileBrowser = thprofileImage
//   if (fileBrowser.files && fileBrowser.files[0]) {
//     const formData = new FormData();
//     formData.append("image", fileBrowser.files[0]);
//     this.http.post('http://localhost:3000/api/upload',formData)
//                   .subscribe(res=>{
//                       this.propic = res;
//                   });
//   }
// }
  
profileImage(propic) {

  const id = localStorage.getItem('userid');
  const body = { "profilepic" : propic, id};
  // this.userService.getProfilePic(id).subscribe(res => {
    // if(res === null){
    //   this.userService.createProfilePic(propic).subscribe(res => {
    //     console.log(res);
    //   });
    // } else {
      this.userService.updateProfilePic(propic).subscribe(res => {
        // this.getProfileImage();
        console.log(res);
      });
    // }
  // });
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
