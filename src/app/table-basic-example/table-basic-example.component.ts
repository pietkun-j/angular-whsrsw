import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table-basic',
  styleUrls: ['./table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) {}

  options = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'body' as const,
    responseType: 'text' as const
  }

  ngOnInit() {
    this.http
      .get('http://techport.nasa.gov/api/projects/91744', this.options)
      .subscribe(data => 
        console.log(JSON.stringify(data))
      );
  }
}
