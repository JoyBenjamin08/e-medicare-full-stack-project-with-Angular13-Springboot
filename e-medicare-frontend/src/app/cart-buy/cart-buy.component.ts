import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as jQuery from 'jquery';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';3
import { CartService } from '../cart.service';
import { Cart } from '../cart';
@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.scss']
})
export class CartBuyComponent implements OnInit {
  id: number=0;
  medicine: Medicine=new Medicine();
  medicines: any;
  submitted: boolean = false;
 
  cart: Cart = new Cart();
  

  constructor(private route: ActivatedRoute,private router: Router,private medicineService: MedicineService,private cartService: CartService) { }

  ngOnInit(): void {
    this.medicine = new Medicine();
    this.getMedicine();
    this.id = this.route.snapshot.params['id'];
    
    this.medicineService.getMedicine(this.id)
      .subscribe(data => {
        console.log(data)
        this.medicine = data;
      }, error => console.log(error));
      //this.list();
  }
  getMedicine()
  {
    this.medicines=this.medicineService.getMedicines();
  }
  list(){
    this.router.navigate(['cart']);
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
    this.router.navigate(['/userpage/cart']);
  }


 

}

