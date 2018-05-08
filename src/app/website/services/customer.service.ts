import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class CustomerService {

  domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
  authToken;
  customerData;
  options;

  constructor(
    private http: Http
  ) { }


  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }

  getAllCustoemrs() {
  	let searchUrl = "http://localhost:8080/customers";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getCustomerById(id) {
    let searchUrl = "http://localhost:8080/customer?customerId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteBookById(id) {
    let searchUrl = "http://localhost:8080/customer?customerId=" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  customerRegister(customerData) {
    let searchUrl = "http://localhost:8080/customer";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ customerData: customerData }), options).map(res => res.json());
  }


  addCustomer(customerData) {
    let searchUrl = "http://localhost:8080/customer";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ customerData: customerData }), options).map(res => res.json());

  }

  updateCustomer(customerData) {
    let searchUrl = "http://localhost:8080/customer";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ customerData: customerData }), options).map(res => res.json());
  }


}
