import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private Base_URL="https://jsonplaceholder.typicode.com/users";

  constructor(private myClient:HttpClient) { }


  getAllUsers(){
    return this.myClient.get(this.Base_URL)
  }

  getUserById(id:any){
    return this.myClient.get(`${this.Base_URL}/${id}`)
  }
}
