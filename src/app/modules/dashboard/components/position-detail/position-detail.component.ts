import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
  }

}
