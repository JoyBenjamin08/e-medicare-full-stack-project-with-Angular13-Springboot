import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  id: number=0;
  cart: Cart=new Cart();

  constructor(private route: ActivatedRoute,private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = new Cart();

    this.id = this.route.snapshot.params['id'];
    
    this.cartService.getCart()
      .subscribe(data => {
        console.log(data)
        this.cart = data;
      }, error => console.log(error));
  }

  updateCart() {
    this.cartService.updateCart(this.id, this.cart)
      .subscribe(data => {
        console.log(data);
        this.cart = new Cart();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCart();    
  }

  gotoList() {
    this.router.navigate(['/cart']);
  }
  }


