import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css']
})
export class PositionAddComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
  }

}
