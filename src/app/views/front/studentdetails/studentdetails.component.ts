import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthuserService } from '../../services/authuser.service';
interface Product {
  ART: string;
  THORN: string;
  codeOracle: string;
  Designation: string;
  quantity: number;
  Limit_Stock: number;
  id: string;
}

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  selectedAttribute = 'codeOracle';

  currentid: any = null;
  initialquantity: any;
  dataArrayX: any = [];
  selected: any;
  choix: number = 0;
  dataProduct = {
    ART: '',
    THORN: '',
    codeOracle: '',
    Designation: '',
    quantity: 0,
    Limit_Stock: 0,
    id: ''
  };

  displayedColumns: any = ['ART', 'codeOracle', 'Designation', 'quantity', 'Limit_Stock', 'Action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  messageErr: any;
  messageSuccess: any;
  filterInput: any;
  dataArrayDetail: any;

  constructor(private ds: DataService, route: Router,private asd:AuthuserService) {

    this.dataSource = new MatTableDataSource<Product>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngOnInit() {
    let profil = this.asd.getProfil()
    this.ds.getAllProductbydeparmtent(profil).subscribe((data: any) => {
      this.dataArrayX = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  

  
  getDetails(id: any) {
    this.ds.getDetails(id).subscribe(response => {
      this.dataArrayDetail=response;
      console.log('response', response);

    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error;
      console.log(err.error);
      console.log(err.status);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const selectedValue = data[this.selectedAttribute];
      return selectedValue.toLowerCase().includes(filter.toLowerCase());
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}


