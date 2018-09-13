import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatTable, ErrorStateMatcher } from '@angular/material';
import { Candidat } from '../../models/candidat';
import { Test } from '../../models/test';
import { Reviewer } from '../../models/reviever';
import { BigPictureComponent } from "../big-picture/big-picture.component";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {

  isLinear = true;
  revievierFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  public position: Position;

  public candidateDatabase: Array<Candidat> = new Array<Candidat>();
  displayedColumns: string[] = ['id', 'name', 'email', '_'];
  dataSourceCandidats: MatTableDataSource<Candidat>;

  public viewerDatabase: Array<Reviewer> = new Array<Reviewer>();
  displayedColumnsR: string[] = ['id', 'name', 'email', '_'];
  dataSourceViewers: MatTableDataSource<Reviewer>;

  public questions: Array<Test> = []

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public loader: boolean = true;
  matcher = new MyErrorStateMatcher();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder, private positionService: PositionsService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      var positionId = params['id'];
      if (positionId !== undefined) {

        console.log('positionId', positionId);

        this.loadPosition(positionId)

        this.revievierFormGroup = this._formBuilder.group({
          id: [''],
          name: ['', Validators.required],
          email: ['', Validators.required]
        });
        this.firstFormGroup = this._formBuilder.group({
          number: ['', Validators.required],
          name: ['', Validators.required],
          phone: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['']
        });
      }

    });
  }

  loadPosition(id: number) {

    this.showLoader();
    this.positionService.getPositionDetail(id).subscribe(position => {
      this.hideLoader();

      this.position = position;

      if (position.viewers !== null) {
        this.viewerDatabase = position.viewers;
      }

      if (position.candidats !== null) {
        this.candidateDatabase = position.candidats;
      }

      console.log('11111111111111111111111111111111111111111111111')

      this.dataSourceCandidats = new MatTableDataSource<Candidat>(this.candidateDatabase)
      this.dataSourceCandidats.paginator = this.paginator;
      this.dataSourceCandidats.sort = this.sort;
      // this.dataSourceCandidats.filterPredicate = (data: Candidat, filter: string) => data.name.indexOf(filter) !== -1 || data.number.indexOf(filter) !== -1;

      console.log('2222222222222222222222222222222222222222222222222')

      // this.dataSourceViewers = new MatTableDataSource<Reviewer>(this.viewerDatabase)

      console.log('333333333333333333333333333333333333333333333333')

    }, (error) => {
      this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });
  }

  goBack() {
    this.router.navigate(['../../dashboard'], { relativeTo: this.activatedRoute });
  }

  applyFilter(filterValue: string) {
    this.dataSourceCandidats.filter = filterValue.trim()
  }

  candidatDetail() {
    this.router.navigate(['../candidat-detail'], { relativeTo: this.activatedRoute });
  }

  addCandidat() {
    console.log('Calling add')
    var candidat = new Candidat();
    candidat.email = this.secondFormGroup.value.email;
    candidat.name = this.secondFormGroup.value.name;
    candidat.phone = this.secondFormGroup.value.phone;

    //this.database.push(candidat);

    this.dataSourceCandidats.data.push(candidat);
    this.dataSourceCandidats.data = this.dataSourceCandidats.data.slice();
    console.log(this.dataSourceCandidats.data);
    this.table.renderRows();
    //his.candidatTable.renderRows();
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

  addReviever() {
    console.log('Calling add')
    var reviev = new Reviewer();
    reviev.name = this.revievierFormGroup.value.name;
    reviev.email = this.revievierFormGroup.value.email;

    //this.database.push(candidat);

    this.dataSourceViewers.data.push(reviev);
    this.dataSourceViewers.data = this.dataSourceViewers.data.slice();
    console.log(this.dataSourceViewers.data);
    this.table.renderRows();
    //his.candidatTable.renderRows();
  }

  deleteReviever(reviever: Reviewer) {
    var index = this.dataSourceViewers.data.indexOf(reviever);
    if (index > -1) {
      this.dataSourceViewers.data.splice(index, 1);
    }
    this.dataSourceViewers.data = this.dataSourceViewers.data.slice();
    this.table.renderRows();
    console.log(this.dataSourceViewers.data);
  }


  getSeconds(date: Date) {
    return date.getTime() / 1000;
  }

  toDateTime(minutes: number) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setMinutes(minutes);
    return t;
  }

  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }

}
