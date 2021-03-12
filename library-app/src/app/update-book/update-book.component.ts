import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validator, Validators} from '@angular/forms';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
   formData=new FormGroup({
     name :new FormControl(''),
     price :new FormControl(''),
     quantity :new FormControl('')
   })

   alert:boolean=false;
  constructor(private lib:LibraryService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.lib.getCurData(this.route.snapshot.params.id).subscribe((result)=>{
      console.warn(result);
      this.formData=new FormGroup({
        name :new FormControl(result['name'], Validators.required),
        price :new FormControl(result['price'], Validators.required),
        quantity :new FormControl(result['quantity'], Validators.required)
      })
    })
  }

  updateBook(){
    this.lib.updateData(this.route.snapshot.params.id,this.formData.value).subscribe((result)=>{
      console.warn(result);
    })
    this.alert=true;
    this.formData.reset({})
  }

}
