import { Component, OnInit, ViewChild } from '@angular/core';
import { DataModule } from './data.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { HttpErrorResponse } from '@angular/common/http';

interface Product {
  name: string;
  email: string;
  department: string;
  
  id: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  
  currentid: any = null;
  initialquantity: any;
  dataArrayX: any = [];
  selected: any;
  choix: number = 0;
  dataProduct = {
    name: '',
    THORN: '',
    codeOracle: '',
    Designation: '',
    quantity: 0,
    Limit_Stock: 0,
    id: ''
  };

  displayedColumns: any = ['ART', 'THORN', 'codeOracle', 'Designation', 'quantity', 'Limit_Stock', 'Action'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  messageErr: any;
  messageSuccess: any;
  filterInput: any;
  selectedAttribute = 'codeOracle';

  constructor(private ds: DataService, route: Router) {
    this.dataSource = new MatTableDataSource<Product>([]);
  }
  

  ngOnInit() {
    this.ds.getUsers().subscribe((data: any) => {
      this.dataArrayX = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
