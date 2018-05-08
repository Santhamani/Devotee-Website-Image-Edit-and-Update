import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor(private auth: UserService) { }

  to: string = '';
    mailData = {
    to: this.to,
    subject: 'testing email',
    text: 'This is just a testing email send by the phpsollution.blogspot.com',
  }
 
  ngOnInit() {}
 
  // uptpwd(mailData) {
  //  this.auth.uptpwd(this.mailData).subscribe();
  // }
}
