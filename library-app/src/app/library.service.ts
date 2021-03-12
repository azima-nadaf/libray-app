import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/books';
  url1='http://localhost:3000/users';
  listData(){
   return this.http.get(this.url)
  }

  addData(data){
    return this.http.post(this.url,data)
  }

  deleteData(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurData(id){
   return this.http.get(`${this.url}/${id}`);
  }

  updateData(id,data){
    return this.http.put(`${this.url}/${id}`,data);
  }

  listDataUsers(){
    return this.http.get(this.url1)
  }

  validateUser(collection,value){
     return collection.find(u=> u.email===value.email && u.password===value.password)
  }
}
