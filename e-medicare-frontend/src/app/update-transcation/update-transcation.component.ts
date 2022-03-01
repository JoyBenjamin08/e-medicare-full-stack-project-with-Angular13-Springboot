import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TransactionStatus} from '../transcation';
import { TranscationService } from '../transcation.service';
@Component({
  selector: 'app-update-transcation',
  templateUrl: './update-transcation.component.html',
  styleUrls: ['./update-transcation.component.css']
})
export class UpdateTranscationComponent implements OnInit {
  transid: number =0;
  transaction: TransactionStatus=new TransactionStatus;

  constructor(private route: ActivatedRoute,private router: Router ,private transactionService: TranscationService) { }

  ngOnInit(): void {
    this.transaction=new TransactionStatus();
    this.transactionService.getTransaction().subscribe(data =>{
    console.log(data) 
    this.transaction=data;
  }, error =>console.log(error));
    
    
  }

  updateStatus(){
    this.transactionService.updateStatus(this.transid,this.transaction)
      .subscribe(data => {
        console.log(data) 
    this.transaction=new TransactionStatus;
    this.gotoList();
  }, error =>console.log(error));
  }

  onSubmit() {
    this.updateStatus();    
  }


  gotoList() {
    this.router.navigate(['/transtatus']);
  }
  

}
