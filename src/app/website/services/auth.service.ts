import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from './user.service';
import { User } from '../shared/models/user.model';

import 'rxjs/add/operator/map';
// import { Profile } from '../shared/models/profile.model';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser: User = new User();
  currentEmail: User = new User();

  // currentUserid: Profile = new Profile();


    constructor(private userService: UserService,
              private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      const decodedEmail = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser, decodedEmail);

      // const decodedUserid = this.decodeProfileFromToken(token);
      // this.setCurrentProfile(decodedUserid);
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        const decodedEmail = this.decodeUserFromToken(res.token);
        // const decodedUserid = this.decodeProfileFromToken(token);
        this.setCurrentUser(decodedUser, decodedEmail);
        // this.setCurrentProfile(decodedUserid);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  // decodeProfileFromToken(token) {
  //   return this.jwtHelper.decodeToken(token).profile;
  // }

  setCurrentUser(decodedUser, decodedEmail) {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentEmail.email = decodedEmail.email;
    this.currentUser.username = decodedUser.username;
    this.currentEmail.email = decodedEmail.email;
    localStorage.setItem('userid',this.currentUser._id );
    localStorage.setItem('email',this.currentEmail.email );
        // this.currentUser.role = decodedUser.role;
    // decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    // delete decodedUser.role;
  }

  // setCurrentProfile(decodedUserid){
  //   this.loggedIn = true;
  //   this.currentUserid.userid = decodedUserid;
  //   localStorage.setItem('userid',this.currentUserid.userid);
  //   // localStorage.setItem('email',this.currentEmail.email );
  // }

}
