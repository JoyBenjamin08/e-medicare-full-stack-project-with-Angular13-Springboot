import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionStatus } from '../transcation';
import { TranscationService } from '../transcation.service';
@Component({
  selector: 'app-transcation-list',
  templateUrl: './transcation-list.component.html',
  styleUrls: ['./transcation-list.component.css']
})
export class TranscationListComponent implements OnInit {
  transtatus: Observable<TransactionStatus[]>=new Observable;

  constructor(private transactionService: TranscationService,private router: Router) { }

  ngOnInit(): void {
    this.getTransactions();
    
  }
  getTransactions(){
    this.transtatus=this.transactionService.getTransaction();
  }
  updateStatus(transid:number){
    this.router.navigate(['update',transid]);

  }
  getTransactionDetails(orderid:number){
    this.router.navigate(['details',orderid]);
  }
  

}
