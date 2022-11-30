import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/products']);
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }

  navigateClientInventory(){
    this.router.navigate(["client-inventory"])
  }

  navigateToMeasurementUnits() {
    this.router.navigate(['/measurement-units']);
  }

  navigateUser(){
    this.router.navigate(["/users"])
  }
}
