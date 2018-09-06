import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../login/services/auth-service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

public profileOpened: boolean = false;


  constructor(private authenticationService: AuthenticationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.authenticationService.logout();
  }

  public showProfile() {

    this.router.navigate(['profile'], { relativeTo: this.activatedRoute });
    this.profileOpened = true;
  }

  public showDashboard() {
    this.router.navigate(['dashboard'], { relativeTo: this.activatedRoute });
    this.profileOpened = false;
  }

}
