import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatTable, ErrorStateMatcher, MatStepper } from '@angular/material';
import { Candidat } from '../../models/candidat';
import { Test } from '../../models/test';
import { CandidatService } from '../../services/candidat.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css']
})
export class PositionAddComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public positionId: number;
  public loader: boolean = true;
  public position: Position;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild('stepper') stepper: MatStepper;

  public candidateDatabase: Array<Candidat> = new Array<Candidat>();
  displayedColumns: string[] = ['name', 'email', 'phone', '_'];
  dataSourceCandidats: MatTableDataSource<Candidat>;
  


  public questions: Array<Test> = []

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder,
    private positionService: PositionsService,
    private candidatService: CandidatService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.positionId = params['id'];
      if (this.positionId !== undefined)
        this.loadPosition(this.positionId)
    });

    this.stepper.selectionChange.subscribe(selection => {
      var index = selection.selectedStep._stepper._selectedIndex
      if (index == 0) {
        this.updatePosition();
      }
    });

    this.firstFormGroup = this._formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      companyInfo: [''],
      about: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      invitationDate: [''],
      expiredDate: [''],
      phone: ['']
    });

    // todo get from parameter position
    // this.database = this.positionService.getdata();

  }

  goBack() {
    this.router.navigate(['../../dashboard'], { relativeTo: this.activatedRoute });
  }

  applyFilter(filterValue: string) {
    this.dataSourceCandidats.filter = filterValue.trim()
  }

  addCandidat() {
    this.showLoader();
    console.log('Calling add')
    var candidat = new Candidat()
    candidat.email = this.secondFormGroup.value.email;
    candidat.name = this.secondFormGroup.value.name;
    candidat.phone = this.secondFormGroup.value.phone;
    candidat.expiredDate = this.getSeconds(this.secondFormGroup.value.expiredDate);
    candidat.invitationDate = this.getSeconds(this.secondFormGroup.value.invitationDate);
    candidat.positionId = this.position.id;

    console.log (candidat)
    //this.database.push(candidat);

    this.candidatService.addCandidat(JSON.stringify(candidat)).subscribe(_ => {
      this.hideLoader();
    }, (error) => {
      this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });

    this.dataSourceCandidats.data.push(candidat);
    this.dataSourceCandidats.data = this.dataSourceCandidats.data.slice();
    console.log(this.dataSourceCandidats.data);
    this.table.renderRows();

  }

  deleteCandidat(candidat: Candidat) {
    var index = this.dataSourceCandidats.data.indexOf(candidat);
    if (index > -1) {
      this.dataSourceCandidats.data.splice(index, 1);
    }
    this.dataSourceCandidats.data = this.dataSourceCandidats.data.slice();
    this.table.renderRows();
    console.log(this.dataSourceCandidats.data);
  }

  addQuestions(question: string, time: string) {

    var test = new Test();
    test.name = question;
    test.time = this.toDateTime(Number.parseInt(time));
    test.id = 0;
    this.questions.push(test);
    console.log(test);

  }

  public savePosition() {
    this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
  }

  public updatePosition() {

    this.position.about = this.firstFormGroup.value.about
    this.position.companyInfo = this.firstFormGroup.value.companyInfo
    this.position.name = this.firstFormGroup.value.name
    this.position.number = this.firstFormGroup.value.number

    JSON.stringify(this.position);
    this.showLoader();
    this.positionService.updatePosition(JSON.stringify(this.position)).subscribe(_ => {
      this.hideLoader();
    });

  }


  loadPosition(id: number) {

    this.showLoader();
    this.positionService.getPositionDetail(id).subscribe(position => {
      this.hideLoader();

      this.position = position;

      if (position.candidats !== null) {
        this.candidateDatabase = position.candidats;
      }
      console.log(this.position);
      this.dataSourceCandidats = new MatTableDataSource<Candidat>(this.candidateDatabase)
      this.dataSourceCandidats.paginator = this.paginator;
      this.dataSourceCandidats.sort = this.sort;

      this.dataSourceCandidats.filterPredicate = (data: Candidat, filter: string) => data.name.indexOf(filter) !== -1;

      this.firstFormGroup.patchValue(this.position); //setValue({ name: position.name, number: position.number, about: position.about, companyInfo: position.companyInfo});
    }, (error) => {
      this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });
  }

  toDateTime(seconds: number) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(seconds);
    return t;
  }

  getSeconds(date: Date) {
    return date.getTime() / 1000;
  }

  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }

}
