import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { AlertService } from '../alert/alert.service';
@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
  id: number=0;
  Medicine: Medicine=new Medicine();

  constructor(private route: ActivatedRoute,private router: Router,
    private MedicineService: MedicineService,public alertService: AlertService) { }

  ngOnInit(): void {
    this.Medicine = new Medicine();

    this.id = this.route.snapshot.params['id'];
    
    this.MedicineService.getMedicine(this.id)
      .subscribe(data => {
        console.log(data)
        this.Medicine = data;
      }, error => console.log(error));
  }

  updateMedicine() {
    this.MedicineService.updateMedicines(this.id, this.Medicine)
      .subscribe(data => {
        console.log(data);
        this.Medicine = new Medicine();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMedicine();  
    
  }
  options = {
    autoClose: false,
    keepAfterRouteChange: false
};
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