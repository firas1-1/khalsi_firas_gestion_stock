import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';

import { AuthuserService } from '../../services/authuser.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
interface Command {
  designation: string;
  justification: string;
  quantity: number;
  department: string;
  MR: number;
  fournisseur: string;
  id: string;
}

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  currentid: any = null;
  initialquantity: any;
  dataArrayX: any = [];
  selected: any;
  selectedResponse:any;
  Response:any='';
  choix: number = 0;
  expanded = false;
  dataResponse: any
  Res: any='';
  name:any='';
  stat:any='';

  handleDoubleClick() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = true;
    }
  }

  dataArray:any=[]
 
  dataStudent={
    designation:'',
    justification:'',
    quantity:0,
    department:'',
    MR:0,
    fournisseur:'',
    id:'',
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  messageSuccess=''
  displayedColumns: any = ['designation', 'justification', 'quantity', 'department', 'MR', 'fournisseur', 'Action'];
  dataSource: MatTableDataSource<Command>;

  selectedAttribute:any='';
  messageErr: any;
  constructor(private ds: DataService, route: Router,private asd:AuthuserService) {

    this.dataSource = new MatTableDataSource<Command>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }

  ngOnInit(): void {
    this.ds.getAllstudents().subscribe((data: any) => {
      this.dataSource.data = data;
      this.dataArrayX = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      })
  }

  addId(id: number) {
    console.log('id', id);
    this.currentid = id;
    this.ds.checkResponse(id).subscribe((data:any) => {
      console.log('response', data);
      this.dataResponse=data
      this.Res=data.Respons
      this.name=data.name
      this.stat=data.Status
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
      console.log(err.error);
      console.log(err.status);
    });

    }
  

  update(f: any) {
    
    console.log('idddddd', this.currentid);
    let data = {
      Respons: f.value.Response,
      name: f.value.test,
    };
    let id = this.currentid

    console.log(this.currentid,'data', data);
    this.ds.updateResponse(id,data).subscribe(response => {
      console.log('response', response);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
      console.log(err.error);
      console.log(err.status);
    });
    
  }
  applyFilter(event: Event) {
    console.log('selected attribute', this.selectedAttribute)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const selectedValue = data[this.selectedAttribute];
      return selectedValue.toLowerCase().includes(filter.toLowerCase());
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  



  

}

