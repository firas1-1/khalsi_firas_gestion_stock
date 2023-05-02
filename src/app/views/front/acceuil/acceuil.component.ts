import { Component } from '@angular/core';
import { AuthadminService } from '../../services/authadmin.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  constructor(private Ads:AuthadminService){
    this.username = this.Ads.getUsername()


  }
  isArabic: boolean = false;
  isEng: boolean = true;
  username:any=''
  


  toggleArabic() {
    this.isArabic = !this.isArabic;
    this.isEng= !this.isEng
  }
  toggleEng() {
    this.isEng=true
    this.isArabic=false
  }
  

}

