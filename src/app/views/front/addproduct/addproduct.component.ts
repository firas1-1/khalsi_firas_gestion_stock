import { Component, OnInit } from '@angular/core';
import { Hero } from './product';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AuthadminService } from '../../services/authadmin.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  messageErr=""
  department: any;
  constructor(private ds:DataService,private route:Router,private asd:AuthadminService) {
    this.department=this.asd.getDepartment()
   }

  ngOnInit(): void {
  }

  add(heroForm:any){
    heroForm.value.department=this.department
    let data=heroForm.value
    // console.log(data)
    this.ds.addproduct(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/stockinitial'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
    })
  }
  model = new Hero(0, '','','','',0,0,''); 

submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
this.model = new Hero(0, '0','','','',0,0,this.department);
}

}

  




