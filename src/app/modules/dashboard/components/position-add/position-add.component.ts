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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  public database: Array<Candidat>;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', '_'];
  dataSource: MatTableDataSource<Candidat>;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['']
    });


    // todo get from parameter position
    // this.database = this.positionService.getdata();
    this.dataSource = new MatTableDataSource<Candidat>(this.database)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data: Candidat, filter: string) => data.name.indexOf(filter) !== -1 || data.id.indexOf(filter) !== -1;

  }

  goBack() {
    this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim()
  }

}
