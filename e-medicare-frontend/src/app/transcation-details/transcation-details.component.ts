import { Component, OnInit } from '@angular/core';
import {TransactionStatus} from '../transcation';
import { TranscationService } from '../transcation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transcation-details',
  templateUrl: './transcation-details.component.html',
  styleUrls: ['./transcation-details.component.css']
})
export class TranscationDetailsComponent implements OnInit {
  transid: number=0;
  transaction: TransactionStatus = new TransactionStatus;


  constructor(private route: ActivatedRoute,private router: Router ,private transactionService: TranscationService) { }

  ngOnInit(): void {
    this.transaction=new TransactionStatus();
    this.transactionService.getTransaction().subscribe(data =>{
    console.log(data) 
    this.transaction=data;
  }, error =>console.log(error));
  }
  list(){
    this.router.navigate(['transtatus']);
  }

}
