
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { LoginService } from './login.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../shared/models/profile.model';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  addprofile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>('/api/profile', profile);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('/api/profiles');
  }

  countProfiles(): Observable<number> {
    return this.http.get<number>('/api/profiles/count');
  }

  addProfile(profile): Observable<any> {
    return this.http.post<any>('/api/addprofile', profile);
  }

 
  getProfileDetails(id) {
    // const id = JSON.stringify(userid);
    return this.http.get(`/api/getprofile/`+id);
  }

  // updateProfileDetails(userid){
  //   // const body = JSON.stringify(userid);
  //   return this.http.put(`api/updateprofile/`+userid);
  // }

  // updateProfile(profile){
    
  //   const id = profile.userid;
  //   const body = JSON.stringify(profile);
  //   // const headers = new Headers({'content-type':'application/json'});
  //   // const token = localStorage.getItem('token');
  //   return this.http.put('/api/updateprofile/'+id, body)
  //   .map((response:Response)=>response.json());
  // }

  updateProfile(profile: Profile): Observable<string> {
    return this.http.put(`/api/updateprofile/${profile.userid}`, profile, { responseType: 'text' });
  }



  // updateProfile(profile: Profile): Observable<string> {
  //   return this.http.put(`/api/updateprofile/${profile.userid}`, profile, { responseType: 'text' });
  // }

  // getId(profile: Profile): Observable<Profile> {
  //   return this.http.get<Profile>(`/api/profile/${profile.userid}`);
  // }

  // deleteProfile(profile: Profile): Observable<string> {
  //   return this.http.delete(`/api/profile/${profile._id}`, { responseType: 'text' });
  // }

}