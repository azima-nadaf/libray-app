import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   collection:any=[];
   addForm=new FormGroup({
    name : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  } )

 array:any=[]
  constructor(private lib:LibraryService) { }

  ngOnInit(): void {
   this.lib.listDataUsers().subscribe((result)=>{
     console.warn(result)
    this.collection=result
   })
  }

  validate(){  

   console.warn(this.addForm.value.password)
    this.array=this.collection.filter((index)=>{
       return (index.email==this.addForm.value.name) && (index.password==this.addForm.value.password)
      }) 
      var result = this.array.map(a => a.password);
      console.warn(this.array)
   
    if(result == this.addForm.value.password){
      console.warn('Success')
    }
    else{
      console.warn('reject');
    }
   }

}
