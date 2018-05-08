import { Component, OnInit, ElementRef, Renderer, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
  // host: {
  //   '(window:scroll)': 'onScroll($event)'
  // }
})
export class WebsiteComponent implements OnInit {

  username = '';
  // isScrolled = false;
  // currPos: Number = 0;
  // startPos: Number = 0;
  // changePos: Number = 100;

  currentUser: User = new User();

  constructor(
    private authService: LoginService,
    public auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private el: ElementRef, private renderer: Renderer
  ) { }

   // Function to logout user
   onLogoutClick() {
    this.auth.logout(); // Logout user
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }
  
//   onScroll(evt) {
//     /**
//      * BAD BAD way to do this
//      * window object can be wrapped as a service
//      * and then be imported here
//     */
//     this.currPos = (window.pageYOffset || evt.target.scrollTop)  - (evt.target.clientTop || 0);
//     if(this.currPos >= this.changePos ) {
//         this.isScrolled = true;
//     } else {
//         this.isScrolled = false;
//     }
// }

// initStateSave(evt) {
//     //trigger an event so child components can listen and save their states
// }

  ngOnInit() {

     // Once component loads, get user's data to display on profile
    //  this.authService.getProfile().subscribe(profile => {
    //   this.username = profile.user.username; // Set username
    //  });
  }

}
