import { Component, OnInit } from '@angular/core';
import { Vieworder } from '../vieworder';
import { ActivatedRoute, Router } from '@angular/router';
import { VieworderService } from '../vieworder.service';

@Component({
  selector: 'app-update-vieworder',
  templateUrl: './update-vieworder.component.html',
  styleUrls: ['./update-vieworder.component.css']
})
export class UpdateVieworderComponent implements OnInit {
  id: number=0;
  vieworder: Vieworder=new Vieworder();

  constructor(private route: ActivatedRoute,private router: Router,
    private vieworderService: VieworderService) { }

  ngOnInit(): void {
    this.vieworder = new Vieworder();

    this.id = this.route.snapshot.params['id'];
    
    this.vieworderService.getVieworder(this.id)
      .subscribe(data => {
        console.log(data)
        this.vieworder = data;
      }, error => console.log(error));
  }

  updateVieworder() {
    this.vieworderService.updateVieworders(this.id, this.vieworder)
      .subscribe(data => {
        console.log(data);
        this.vieworder = new Vieworder();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateVieworder();    
  }

  gotoList() {
    this.router.navigate(['/vieworders']);
  }

}
