import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicines: Observable<Medicine[]>=new Observable;


  constructor(private medicineService: MedicineService,private router: Router) { }

  ngOnInit(): void {
    this.getMedicine();
   
  }

  getMedicine()
  {
    this.medicines=this.medicineService.getMedicines();
  }
  
  deleteMedicine(id: number) {
    this.medicineService.deleteMedicines(id)
      .subscribe(
        data => {
          console.log(data);
          this.getMedicine();
        },
        error => console.log(error));
  }

  MedicineDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateMedicine(id: number)
  {
    this.router.navigate(['update', id]);
  }
}


