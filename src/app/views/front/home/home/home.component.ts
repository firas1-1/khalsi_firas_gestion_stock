import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Lottie from 'lottie-web';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  username: any=''  
  constructor(private route:Router,private Ads:AuthadminService){
    this.username = this.Ads.getUsername()
   

  }

    @ViewChild('animationContainer') container!: ElementRef;
    private animation!: any;
    private message:any='aaaaaaaaaaa'
  
    ngAfterViewInit() {
      this.animation = Lottie.loadAnimation({
        container: this.container.nativeElement,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/test.json'
      });
  
      this.animation.addEventListener('complete', () => {
        this.route.navigate(['/acceuil'])      });
    }
  
    playAnimation() {
      if (this.animation) {
        this.animation.play();
      }
    }
  
    pauseAnimation() {
      if (this.animation) {
        this.animation.pause();
      }
    }
  
    stopAnimation() {
      if (this.animation) {
        this.animation.stop();
      }
    }
  }
  