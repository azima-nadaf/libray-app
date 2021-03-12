import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {LibraryService} from '../library.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addForm=new FormGroup({
    name : new FormControl('',Validators.required),
    quantity :new FormControl('',Validators.required),
    price : new FormControl('',Validators.required)
  } )
      
  alert:boolean=false;

  constructor(private lib:LibraryService) { }

  ngOnInit(): void {
  }

  addBook(){
  
   
      this.lib.addData(this.addForm.value).subscribe((result)=>{
        console.warn(result)
      })  
      this.addForm.reset({});  
    
    this.alert=true;
  
  }

}
