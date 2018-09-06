import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(afAuth: AngularFireAuth, private router: Router, private activatedRoute: ActivatedRoute) { }
  public errorCode: string;
  public errorMessage: string;

  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("login successefull")
        this.router.navigate(['/dashboard']);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  toDashboardTest() {
    this.router.navigate(['/main']);
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
  }

  toProfile() {
    this.router.navigate(['/profile'], {relativeTo: this.activatedRoute } );
  }

}
