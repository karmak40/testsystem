import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
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

  public database: Array<Candidat> = new Array<Candidat>();
  displayedColumns: string[] = ['id', 'name', 'email', '_'];
  dataSource: MatTableDataSource<Candidat>;

  public databaseR: Array<Reviewer> = new Array<Reviewer>();
  displayedColumnsR: string[] = ['id', 'name', 'email', '_'];
  dataSourceR: MatTableDataSource<Reviewer>;

  public questions: Array<Test> = []

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
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

    // todo get from parameter position
    // this.database = this.positionService.getdata();
    this.dataSource = new MatTableDataSource<Candidat>(this.database)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceR = new MatTableDataSource<Reviewer>(this.databaseR)
  // this.dataSourceR.paginator = this.paginator;
  //  this.dataSourceR.sort = this.sort;

    this.dataSource.filterPredicate = (data: Candidat, filter: string) => data.name.indexOf(filter) !== -1 || data.id.indexOf(filter) !== -1;
  }

  goBack() {
    this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim()
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

    this.dataSource.data.push(candidat);
    this.dataSource.data = this.dataSource.data.slice();
    console.log(this.dataSource.data);
    this.table.renderRows();
    //his.candidatTable.renderRows();
  }

  deleteCandidat(candidat: Candidat) {
    var index = this.dataSource.data.indexOf(candidat);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
    }
    this.dataSource.data = this.dataSource.data.slice();
    this.table.renderRows();
    console.log(this.dataSource.data);
  }

  addQuestions(question: string, time: string) {

    var test = new Test();
    test.name = question;
    test.time = Number.parseInt(time);
    test.id = '0';
    this.questions.push(test);
    console.log (test);

 }

  addReviever() {
    console.log('Calling add')
    var reviev = new Reviewer();
    reviev.name = this.revievierFormGroup.value.name;
    reviev.email = this.revievierFormGroup.value.email;

    //this.database.push(candidat);

    this.dataSourceR.data.push(reviev);
    this.dataSourceR.data = this.dataSourceR.data.slice();
    console.log(this.dataSourceR.data);
    this.table.renderRows();
    //his.candidatTable.renderRows();
  }

  deleteReviever(reviever: Reviewer) {
    var index = this.dataSourceR.data.indexOf(reviever);
    if (index > -1) {
      this.dataSourceR.data.splice(index, 1);
    }
    this.dataSourceR.data = this.dataSourceR.data.slice();
    this.table.renderRows();
    console.log(this.dataSourceR.data);
  }

}
