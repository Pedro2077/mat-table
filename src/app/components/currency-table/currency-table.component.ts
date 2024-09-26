import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

export interface Currency {
  code: string;
  description: string;
}

const CURRENCY_DATA: Currency[] = [
  { code: 'AED', description: 'United Arab Emirates Dirham' },
  { code: 'AFN', description: 'Afghan Afghani' },
  { code: 'ALL', description: 'Albanian Lek' },
  { code: 'AMD', description: 'Armenian Dram' },
  { code: 'ANG', description: 'Netherlands Antillean Guilder' },
  // ... adicione mais moedas aqui
];

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent {
  displayedColumns: string[] = ['code', 'description'];
  dataSource = new MatTableDataSource(CURRENCY_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
