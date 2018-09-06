import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService } from '../../services/auth-service/authentication.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessageShow = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  constructor(private authenticationService: AuthenticationService) { }

  public login(email: string, password: string): void {
    console.log ('login', email, password)
    this.authenticationService.signin(email, password)
  }

  private hideError() {
    setTimeout(() => {
      this.errorMessageShow = false;;
    }, 2000)
  }

  public testLogin() {  //todo delete later
    this.authenticationService.toDashboardTest();
  }

}
