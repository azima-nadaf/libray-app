import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  collection:any=[];
  constructor(private lib:LibraryService) { }

  ngOnInit(): void {
       this.lib.listData().subscribe((result)=>{
         console.warn(result)
         this.collection=result
       })
  }

  delete(id){
  
    console.warn(id);
   this.lib.deleteData(id).subscribe((result)=>{
     console.warn(result)
   })
   this.collection.splice(id-1,1);
  }

}
