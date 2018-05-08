import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../gaurds/auth.guard';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: string;
  fname: string;
  lname: string;
  dob: string;
  phoneno: string;
  raasi: string;
  nakshatram: string;
  tob: string;
  pob: string;
  address: string;
  caste: string;
  religion: string;
  remarks: string;
  previousUrl;
  messageClass;
  message;

  editMode: boolean = false;

  constructor(
        private customerService: CustomerService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authGuard: AuthGuard) {
        }


  ngOnInit(){ 

    this.route.params.subscribe(params => {
      if(params["customerId"]) {
        let customerId = params["customerId"];
        this.editMode = true;
        console.log(this.editMode);
        this.customerService.getCustomerById(customerId).subscribe(customer => {
          this.id = customer._id;
          this.fname = customer.fname;
          this.lname = customer.lname;
          this.dob = customer.dob;
          this.phoneno = customer.phoneno;
          this.raasi = customer.raasi;
          this.tob = customer.tob;
          this.nakshatram = customer.nakshatram;
          this.pob = customer.pob;
          this.address = customer.address;
          this.caste = customer.caste;
          this.religion = customer.religion;
          this.remarks = customer.remarks;
        });
      }
    });
  }

  addCustomer() {
    if(this.editMode) {
      let customerData = {
          // id : this._id,
          fname : this.fname,
          lname : this.lname,
          dob : this.dob,
          phoneno : this.phoneno,
          raasi : this.raasi,
          tob : this.tob,
          nakshatram : this.nakshatram,
          pob : this.pob,
          address : this.address,
          caste : this.caste,
          religion : this.religion,
          remarks : this.remarks,
      }

      this.customerService.updateCustomer(customerData).subscribe(result => {
        if(result.success) {
          alert(result.message);
          this.router.navigate(["/"]);
        }
      });
    } else {
      let customerData = {
        // id : this._id,
        fname : this.fname,
        lname : this.lname,
        dob : this.dob,
        phoneno : this.phoneno,
        raasi : this.raasi,
        tob : this.tob,
        nakshatram : this.nakshatram,
        pob : this.pob,
        address : this.address,
        caste : this.caste,
        religion : this.religion,
        remarks : this.remarks,
      }

      this.customerService.addCustomer(customerData).subscribe(res => {
        if(res.success) {
          alert(res.message);
          this.router.navigate(["/"]);
        } else {
          alert(res.message);
        }
      });
    }

    // On page load, check if user was redirected to login

    if (this.authGuard.redirectUrl) {

      this.messageClass = 'alert alert-danger'; // Set error message: need to login

      this.message = 'You must be logged in to view that page.'; // Set message

      this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from

      this.authGuard.redirectUrl = undefined; // Erase previous URL

    }

  }


}
