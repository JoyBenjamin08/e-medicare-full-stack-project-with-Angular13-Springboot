import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.scss']
})
export class MedicineDetailsComponent implements OnInit {
  id: number=0;
  medicine: Medicine=new Medicine();


  constructor(private route: ActivatedRoute,private router: Router,private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicine = new Medicine();

    this.id = this.route.snapshot.params['id'];
    
    this.medicineService.getMedicine(this.id)
      .subscribe(data => {
        console.log(data)
        this.medicine = data;
      }, error => console.log(error));
      //this.list();
  }

  list(){
    this.router.navigate(['medicines']);
  }
  }


