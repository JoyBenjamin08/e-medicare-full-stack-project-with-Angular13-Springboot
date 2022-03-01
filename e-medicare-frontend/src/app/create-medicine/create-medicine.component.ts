import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {
  medicine: Medicine = new Medicine();
  submitted = false;

  constructor(private MedicineService: MedicineService, private router: Router,public alertService: AlertService) { }

  ngOnInit(): void {
  }
    newMedicine(): void {
      this.submitted = false;
      this.medicine = new Medicine();
    }
  
    save() {
      this.MedicineService.createMedicines(this.medicine).subscribe(data => {
        console.log(data+" "+this.medicine)
       this.medicine = new Medicine();
        this.gotoList();
      },
     error => console.log(error));
    }
    options = {
             autoClose: false,
             keepAfterRouteChange: false
          };
      
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/medicine']);
    }
  
  }
// export class HomeComponent {
//     options = {
//         autoClose: false,
//         keepAfterRouteChange: false
//     };

//     constructor(public alertService: AlertService) { }
// } 