import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: Observable<Cart[]>=new Observable;


  constructor(private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart()
  {
    this.cart=this.cartService.getCart();
  }
  
  deleteCart(id: number) {
    this.cartService.deleteCart(id)
      .subscribe(
        data => {
          console.log(data);
          this.getCart();
        },
        error => console.log(error));
  }
  cartDetails(id: number){
    this.router.navigate(['detailscart', id]);
  }
  updateCart(id: number)
  {
    this.router.navigate(['updatecart', id]);
  }

}
