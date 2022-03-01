import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  id: number=0;
  cart: Cart=new Cart();

  constructor(private route: ActivatedRoute,private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = new Cart();

    this.id = this.route.snapshot.params['id'];
    
    this.cartService.getCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.cart = data;
      }, error => console.log(error));
      //this.list();
  }

  list(){
    this.router.navigate(['cart']);
  }
  }


