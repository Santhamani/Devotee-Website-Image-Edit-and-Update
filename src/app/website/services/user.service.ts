
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/models/user.model';
import { Profile } from '../shared/models/profile.model';
import { ProfileImage } from '../shared/models/profile-image.model';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`/api/user/${user._id}`);
  }

  editUser(user: User): Observable<string> {
    return this.http.put(`/api/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(`/api/user/${user._id}`, { responseType: 'text' });
  }

  addRelation(relation){
    const body = JSON.stringify(relation);
    return this.http.post('/api/relation', { responseType: 'text' });
  }

  // updateProfilePic(profileimg: ProfileImage): Observable<string> {
  //   return this.http.put(`/api/updateprofilepic/${profileimg.userid}`, profileimg, { responseType: 'text' });
  // }

  // updateProfilePic(propic): Observable<Profile> {
  //   const body = { "profilepic" : propic};
  //   return this.http.post<Profile>('/api/updateprofilepic/${profile.userid}', body);
  // }

  updateProfilePic(propic){
    const id = localStorage.getItem('userid');
    const body = { "profilepic" : propic, "userid": id}
      return this.http.put('./api/updateprofilepic/'+id, body)
      // .map((response : Response)=>{
      //   response.json();
      // });
    }
    
  getProfilePic(id) {
    return this.http.get(`/api/getprofilepic/`+id);
  }

  createProfilePic(propic)  {
    const id = localStorage.getItem('userid');
    const body = { "profilepic" : propic, "userid": id};
      return this.http.post('./api/createprofilepic', body)
      .map((response : Response)=>{
        response.json();
      });
  }


    // uptpwd(maildata) {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({headers: headers});
    //   return this.http.post('./api/sendemail', maildata)
    //             .map((res:Response) => res.json());
    //  }
}
