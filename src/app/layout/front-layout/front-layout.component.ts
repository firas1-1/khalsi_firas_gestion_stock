import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css'],
})
export class FrontLayoutComponent implements OnInit {
  dataArrayX: any;
  dataSource: any;
  length: any=0;
username: any;
  constructor(public au:AuthuserService,private router:Router,private ds:DataService,private asd: AuthadminService) {
    this.getnotification()
    this.username=this.asd.getUsername()
   
  }

  ngOnInit(): void {
    this.getnotification()
    
  
  }
  
  openSidebar() {
    
    const sidebar = document.getElementById("mySidebar");
if (sidebar) {
  sidebar.style.display = "block";
}

    }
    
    closeSidebar() {
      const sidebar = document.getElementById("mySidebar");
      if (sidebar) {
        sidebar.style.display = "none";
      }
          }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginuser'])
  }
  profile(){
    this.router.navigate(['/profile'])
  }
  getnotification(){
    let dep = this.asd.getDepartment()
    this.ds.getnotification(dep).subscribe((data: any) => {
      console.log(data )
      this.dataArrayX = data;
      this.length = this.dataArrayX.length
      this.dataSource.data = data;
    });

  }

}
