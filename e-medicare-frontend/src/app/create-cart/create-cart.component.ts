import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  cart: Cart = new Cart();
  submitted = false;


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }
  newCart(): void {
    this.submitted = false;
    this.cart = new Cart();
  }

  save() {
    this.cartService.createCart(this.cart).subscribe(data => {
      console.log(data+" "+this.cart)
     this.cart = new Cart();
      this.gotoList();
    },
   error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/cart']);
  }


}


