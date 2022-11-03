import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-cart-button',
  templateUrl: './my-cart-button.component.html',
  styleUrls: ['./my-cart-button.component.scss']
})
export class MyCartButtonComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToCart(): void{
    this.router.navigateByUrl('/my-cart');
  }
}
