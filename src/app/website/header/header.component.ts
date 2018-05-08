// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/models/user.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  currentUser: User = new User();

  @Input() isScrolled = true; 
  
  constructor(
    private authService: LoginService,
    public auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private profileService: ProfileService,
    // private router
  ){}

   // Function to logout user
   onLogoutClick() {
    this.auth.logout(); // Logout user
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }
  
  goToProfile(){

    const userid = localStorage.getItem('userid');
 
    this.profileService.getProfileDetails(userid).subscribe(
      data => {
       if(data == null){
        this.router.navigate(['./profile']);
       } else {
         this.router.navigate(['./update-profile'])
       }
      }
    );
  }

  ngOnInit() {}

}
