import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { Position } from '../../models/position';
import { Candidat } from '../../models/candidat';
import { MatTableDataSource, MatPaginator, MatSort, MatTable } from '@angular/material';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.css']
})
export class BigPictureComponent implements OnInit {

  @Input() position: Position;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  changeLog: string[] = [];

  public candidateDatabase: Array<Candidat> = new Array<Candidat>();
  displayedColumns: string[] = ['name', 'email', 'total'];
  dataSourceCandidats: MatTableDataSource<Candidat>;


  constructor() { }

  ngOnInit() {

    if (this.position.candidats !== null) {
      this.candidateDatabase = this.position.candidats;
    }

    this.dataSourceCandidats = new MatTableDataSource<Candidat>(this.candidateDatabase)
    this.dataSourceCandidats.paginator = this.paginator;
    this.dataSourceCandidats.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSourceCandidats.filter = filterValue.trim()
  }

  public getTotal (element: Candidat) {
    var total = 0;
    var number = 0;

    element.answers.forEach(answer => {
        answer.ratings.forEach(rating => {
            total = total + rating.grade;
            number++;
        });
    });

    var res = total / number;
    if (number == 0) {
      return 0;
    }

    return res;
  }

}
