

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../models/users.model';
import { Registrationservice} from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users:users |undefined;
  constructor(private registrationservice:Registrationservice,
    private router: Router,private route:ActivatedRoute
    ) { }


  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.registrationservice.register(form.value.firstname,form.value.lastname,form.value.contact_no,form.value.address,form.value.username,form.value.password).subscribe((reg)  => {
      this.users = reg;
      this.router.navigate(['/login'], { relativeTo: this.route});
    })
  }
}
