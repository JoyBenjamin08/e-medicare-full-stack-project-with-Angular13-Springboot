import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vieworder } from '../vieworder';
import { VieworderService } from '../vieworder.service';
@Component({
  selector: 'app-create-vieworder',
  templateUrl: './create-vieworder.component.html',
  styleUrls: ['./create-vieworder.component.css']
})
export class CreateVieworderComponent implements OnInit {
  vieworder: Vieworder = new Vieworder();
  submitted = false;

  constructor(private VieworderService: VieworderService, private router: Router) { }

  ngOnInit(): void {
  }
    newVieworder(): void {
      this.submitted = false;
      this.vieworder = new Vieworder();
    }
  
    save() {
      this.VieworderService.createVieworders(this.vieworder).subscribe(data => {
        console.log(data+" "+this.vieworder)
       this.vieworder = new Vieworder();
        this.gotoList();
      },
     error => console.log(error));
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/vieworder']);
    }
  
  }


