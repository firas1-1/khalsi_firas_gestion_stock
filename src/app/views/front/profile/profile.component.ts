import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../../services/authadmin.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthuserService } from '../../services/authuser.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:any
  dataArrayX: any;
  department:any;
  data:any={}
  Tel:any='--- --- ---'
  messageError: any;
  constructor(private asd:AuthadminService,private route:Router,private ds:DataService,private Aus:AuthuserService) {
  
      this.username=this.asd.getUsername()
      this.department=this.asd.getDepartment()
     
     
   }

  ngOnInit(): void {
  }
  selected: any;
  selectedResponse:any;
  Response:any='';
  choix: number = 0;
  expanded = false;
 

  handleDoubleClick() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = true;
    }
  }
  getfirstname(f:any){
    this.data.Tel = f.value.Tel
    this.Aus.register(this.data.Tel).subscribe((data:any)=>{

      console.log('dataa',data)
   console.log(data)
  },(err:HttpErrorResponse)=>{
    console.log(err)
    this.messageError.err.console.error();
    })

  }

}
