import { OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  public loader: boolean = true;

  public database: Array<Position>;
  displayedColumns: string[] = ['number', 'name', 'status', '_'];
  dataSource: MatTableDataSource<Position>;


  ngOnInit() {

    console.log ('ContentComponent')

    this.loadPositions();
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private positionService: PositionsService) {
  }

  selectPosition(position: Position) {
    this.router.navigate(['../position-detail', position.id], { relativeTo: this.activatedRoute });
  }

  public loadPositions() {
    this.showLoader();
    this.positionService.getPositions().subscribe(positions => {
     
      this.database = positions;
      this.dataSource = new MatTableDataSource<Position>(this.database)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data: Position, filter: string) => data.name.indexOf(filter) !== -1 || data.number.indexOf(filter) !== -1;
      this.hideLoader();

      //this.router.navigate(['../position-add', id], { relativeTo: this.activatedRoute });
    }, (error) => {
      this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });
  }

  addPosition() {

    this.showLoader();
    this.positionService.addDefaultPosition().subscribe(id => {
      this.hideLoader();
      this.router.navigate(['../position-add', id], { relativeTo: this.activatedRoute });
    }, (error) => {
      this.hideLoader();
      //this.errorMessageOn(error.message)
      //console.log('error.message');
      return Observable.throw(new Error(error.status));
    });
  }

  deletePositon(row: any) {
    this.table.renderRows();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim()
  }

  private showLoader() {
    this.loader = false;
  }

  private hideLoader() {
    this.loader = true;
  }


}
