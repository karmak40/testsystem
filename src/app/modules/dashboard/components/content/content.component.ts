import { OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  
  public database: Array<Position>;
  displayedColumns: string[] = ['id', 'name', 'active', '_'];
  dataSource: MatTableDataSource<Position>;
 
  ngOnInit() {
    this.database = this.positionService.getdata(); 
    this.dataSource = new MatTableDataSource<Position>(this.database)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private positionService: PositionsService) {
  }

  selectPosition(position: Position) {
    this.router.navigate(['../position-detail'], { relativeTo: this.activatedRoute });
  }

  addPosition() {
    this.router.navigate(['../position-add'], { relativeTo: this.activatedRoute });
  }

  deletePositon(row: any) {
    this.table.renderRows();
  }


}
