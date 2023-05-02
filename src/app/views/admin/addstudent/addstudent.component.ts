import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
     let Response = {
      command_id:"",

      Respons:'On demand',
      
      name: 'On demand',
      
      Status: 'In progress',
      
    };
    let data=f.value
    // console.log(data)
    this.ds.addstudent(data).subscribe((data:any)=>{
      Response.command_id=data._id
      
      
      console.log('respooooooooooonse',data._id)
      this.ds.addResponse(Response).subscribe((data: any) => {
        console.log(data)
      })

      this.route.navigate(['/admin/allstudents'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
    })
    
  }

}
