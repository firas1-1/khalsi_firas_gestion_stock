import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as lottie from 'lottie-web';


import Swal from 'sweetalert2';
import { FrontLayoutComponent } from 'src/app/layout/front-layout/front-layout.component';
import { read } from 'xlsx';

import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import { AuthadminService } from '../../services/authadmin.service';
import { AuthuserService } from '../../services/authuser.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { style } from '@angular/animations';

interface Product {
  ART: string;
  codeOracle: string;
  Designation: string;
  quantity: number;
  alert_quantity: number;
  id: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  currentid: any = null;
  initialquantity: any;
  dataArrayX: any = [];
  selected: any;
  choix: number = 0;
  dataProduct = {
    ART: '',
    codeOracle: '',
    Designation: '',
    quantity: 0,
    Limit_Stock: 0,
    id: ''
  };
  notif = {
    department: '',
    codeOracle: '',
    quantity: 0,
  };

  displayedColumns: any = ['ART', 'codeOracle', 'Designation', 'quantity', 'Limit_Stock', 'Action'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  filterInput: any;
  showAlert: boolean = false;
  showAlertSucess: boolean = false;
  showAlertWarning: boolean = false;
  alertData: any[] = [];
  selectedAttribute = '';
  department: any;
  profil:any='';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

  messageErr: any;
  messageSuccess: any;

  constructor(
    private ds: DataService,
    route: Router,
    private FrontLayout: FrontLayoutComponent,
    private asd: AuthuserService,
    private tok: AuthadminService,
    //public snackBar: MatSnackBar,
    
  ) {
    this.department = this.tok.getDepartment();
  }

  ngOnInit() {
     this.profil = this.asd.getProfil();
    this.ds.getAllProductbydeparmtent(this.profil).subscribe((data: any) => {
      this.dataArrayX = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.getnotif();
  }

  
  
  importExcel() {
    // Create a file input element
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.xlsx';
    inputElement.onchange = () => {
      // Get the selected file
      const file = inputElement.files?.[0];
      console.log(file);
  
      if (file) { // Vérification que le fichier est défini
        // Create a file reader
        const fileReader = new FileReader();
        fileReader.onload = () => {
          // Read the Excel file
          const data = new Uint8Array(fileReader.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
  
          // Get the first worksheet
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
          // Convert the worksheet to a JSON object
          const jsonArray = XLSX.utils.sheet_to_json(worksheet);
          console.log(jsonArray);
  
          // Call the importxlsx() function and pass the jsonArray
        
        };
        fileReader.readAsArrayBuffer(file);
      }
    };
    // Click the file input element to trigger the file selection dialog
    inputElement.click();
  }
  
  
  
  
  
  
  
  
  
  exportExcel(): void {
  const fileName: string = 'stock.xlsx';
  const table = this.table.nativeElement;
  if (!table) {
    console.error('Table element not found');
    return;
  }
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Stock');
  XLSX.writeFile(wb, fileName);
}


  // Export to PDF
 // Export to PDF

  // Your existing code here




  addId(id: number, quantity: number) {
    console.log('id', id);
    this.currentid = id;
    this.initialquantity = quantity;

  }
  getnotif(){
    this.FrontLayout.getnotification();
  }
  add(f: any) {
    console.log('idddddd', this.currentid);
    let data = {
      idProduct: this.currentid,
      quantity: f.value.quantity,
      correction: f.value.test,
    };

    let correction = { test: f.value.test };
    this.choix = correction.test;
    console.log('test', this.choix); // wrap quantity in an object
    console.log(data);
    this.ds.addQuantity(data).subscribe(response => {
      console.log('response', response);
      this.updatenewProduct(response);
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
  
  
  addalerte(notif:any) {
    let data=notif
     console.log('ddddddddddata',data)
    this.ds.addnotification(data).subscribe(response=>{
      console.log('response',response)
      this.getnotif();
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
     console.log(err.error)
      console.log(err.status)
    })
  }
  delete(codeOracle:any){
    console.log('coooooooooode',codeOracle)

    this.ds.deletenotification(codeOracle).subscribe(response=>{
      console.log(response)
      this.getnotif();
    })

  }
  updateProduct(fa:any){
    
      let data=fa.value


       data.department=this.profil
       console.log('data',data)
       let id=this.currentid
      this.ds.updateProduct(id,data).subscribe(response=>
        {
        console.log('response',response)
          
          this.messageSuccess=`this student  is updated`
  
  
        },(err:HttpErrorResponse)=>{
          console.log(err.message)
        
        })
    }
    deleteProduct() {
      let id = this.currentid;
      
      Swal.fire({
        title: 'Are you sure you want to delete this product? ',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ds.deleteProduct(id).subscribe(response => {
            console.log(response);
            Swal.fire(
              'Deleted!',
              'The product has been deleted.',
              'success'
            );
            this.ngOnInit(); // Refresh the page
          }, (err: HttpErrorResponse) => {
            console.log(err);
          });
        }
      });
    }
    
    
    
   
  

  
  updatenewProduct(response: any) {
    const lastquantity = Number(this.initialquantity);

    console.log('lastquantity', lastquantity);

    const currentquantity = Number(response.quantity);

    console.log('currentquantity', currentquantity);

    let newquantity: number;
    
    if (this.choix == 1) {
      newquantity = lastquantity + currentquantity;
    } else {
      newquantity = lastquantity - currentquantity;
    }
    const data = { quantity: newquantity };

    console.log('resultat', data);

    this.ds.updateProduct(this.currentid, data).subscribe(
      (response) => {
        console.log(response);
        const indexId = this.dataArrayX.findIndex((obj: any) => obj._id == this.currentid);
        this.dataSource.data[indexId].quantity = data.quantity;
        this.messageSuccess = `This product ${this.dataArrayX[indexId].quantity} is updated.`;
        console.log('limit stock', this.dataSource.data[indexId].alert_quantity);

        if (this.dataSource.data[indexId].quantity < this.dataSource.data[indexId].alert_quantity) {
          this.notif.department=this.department
          this.notif.codeOracle=this.dataSource.data[indexId].codeOracle
          this.notif.quantity=this.dataSource.data[indexId].quantity
          
          
          this.addalerte(this.notif);
          
          Swal.fire({
            title: 'Are you sure ?',
            text: 'The actual quantity is less than the minimum quantity !',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-danger'
            }
          });
          return; 
        } else if (this.dataSource.data[indexId].quantity === this.dataSource.data[indexId].alert_quantity){
          this.showAlertWarning = true;
          
          this.delete(this.dataSource.data[indexId].codeOracle);

          return; 
        }
        
      else  {
        
        this.showAlertSucess = true;
           setTimeout(() => {
          this.showAlertSucess = false;
         
          this.delete(this.dataSource.data[indexId].codeOracle);

}, 3000);
      }
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }

    );
    
  
}
}

