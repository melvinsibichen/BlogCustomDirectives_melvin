import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  authorComponent() {
    this.router.navigate(['author']);
  }


  locationComponent() {
    this.router.navigate(['locations']);
  }

  planComponent() {
    this.router.navigate(['contact']);
  }
}
