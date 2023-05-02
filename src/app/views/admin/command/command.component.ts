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
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  currentid: any = null;
  initialquantity: any;
  dataArrayX: any = [];
  selected: any;
  selectedResponse:any;
  Response:any='';
  choix: number = 0;
  isEditable:boolean=false;

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

