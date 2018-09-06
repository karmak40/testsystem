import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard.main.component.html',
  styleUrls: ['./dashboard.main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.router.navigate(['dashboard'], {relativeTo: this.activatedRoute});
  }

}
