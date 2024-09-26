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
  { code: 'AOA', description: 'Angolan Kwanza' },
  { code: 'ARS', description: 'Argentine Peso' },
  { code: 'AUD', description: 'Australian Dollar' },
  { code: 'AWG', description: 'Aruban Florin' },
  { code: 'AZN', description: 'Azerbaijani Manat' },
  { code: 'BAM', description: 'Bosnia and Herzegovina Convertible Mark' },
  { code: 'BBD', description: 'Barbadian Dollar' },
  { code: 'BDT', description: 'Bangladeshi Taka' },
  { code: 'BGN', description: 'Bulgarian Lev' },
  { code: 'BHD', description: 'Bahraini Dinar' },
  { code: 'BIF', description: 'Burundian Franc' },
  { code: 'BMD', description: 'Bermudian Dollar' },
  { code: 'BND', description: 'Brunei Dollar' },
  { code: 'BOB', description: 'Bolivian Boliviano' },
  { code: 'BRL', description: 'Brazilian Real' },
  { code: 'BSD', description: 'Bahamian Dollar' },
  { code: 'BTN', description: 'Bhutanese Ngultrum' },
  { code: 'BWP', description: 'Botswana Pula' },
  { code: 'BYN', description: 'Belarusian Ruble' },
  { code: 'BZD', description: 'Belize Dollar' },
  { code: 'CAD', description: 'Canadian Dollar' },
  { code: 'CDF', description: 'Congolese Franc' },
  { code: 'CHF', description: 'Swiss Franc' },
  { code: 'CLP', description: 'Chilean Peso' },
  { code: 'CNY', description: 'Chinese Yuan' },
  { code: 'COP', description: 'Colombian Peso' },
  { code: 'CRC', description: 'Costa Rican Colón' },
  { code: 'CUP', description: 'Cuban Peso' },
  { code: 'CZK', description: 'Czech Koruna' },
  { code: 'DKK', description: 'Danish Krone' },
  { code: 'DOP', description: 'Dominican Peso' },
  { code: 'DZD', description: 'Algerian Dinar' },
  { code: 'EGP', description: 'Egyptian Pound' },
  { code: 'ERN', description: 'Eritrean Nakfa' },
  { code: 'ETB', description: 'Ethiopian Birr' },
  { code: 'EUR', description: 'Euro' },
  { code: 'FJD', description: 'Fijian Dollar' },
  { code: 'FKP', description: 'Falkland Islands Pound' },
  { code: 'GBP', description: 'British Pound Sterling' },
  { code: 'GEL', description: 'Georgian Lari' },
  { code: 'GHS', description: 'Ghanaian Cedi' },
  { code: 'GTQ', description: 'Guatemalan Quetzal' },
  { code: 'GYD', description: 'Guyanese Dollar' },
  { code: 'HKD', description: 'Hong Kong Dollar' },
  { code: 'HNL', description: 'Honduran Lempira' },
  { code: 'HRK', description: 'Croatian Kuna' },
  { code: 'HTG', description: 'Haitian Gourde' },
  { code: 'HUF', description: 'Hungarian Forint' },
  { code: 'IDR', description: 'Indonesian Rupiah' },
  { code: 'ILS', description: 'Israeli New Shekel' },
  { code: 'INR', description: 'Indian Rupee' },
  { code: 'IQD', description: 'Iraqi Dinar' },
  { code: 'IRR', description: 'Iranian Rial' },
  { code: 'ISK', description: 'Icelandic Króna' },
  { code: 'JMD', description: 'Jamaican Dollar' },
  { code: 'JPY', description: 'Japanese Yen' },
  { code: 'KES', description: 'Kenyan Shilling' },
  { code: 'KGS', description: 'Kyrgyzstani Som' },
  { code: 'KHR', description: 'Cambodian Riel' },
  { code: 'KMF', description: 'Comorian Franc' },
  { code: 'KRW', description: 'South Korean Won' },
  { code: 'KWD', description: 'Kuwaiti Dinar' },
  { code: 'KYD', description: 'Cayman Islands Dollar' },
  { code: 'KZT', description: 'Kazakhstani Tenge' },
  { code: 'LAK', description: 'Lao Kip' },
  { code: 'LBP', description: 'Lebanese Pound' },
  { code: 'LKR', description: 'Sri Lankan Rupee' },
  { code: 'LRD', description: 'Liberian Dollar' },
  { code: 'LSL', description: 'Lesotho Loti' },
  { code: 'LYD', description: 'Libyan Dinar' },
  { code: 'MAD', description: 'Moroccan Dirham' },
  { code: 'MDL', description: 'Moldovan Leu' },
  { code: 'MGA', description: 'Malagasy Ariary' },
  { code: 'MKD', description: 'Macedonian Denar' },
  { code: 'MMK', description: 'Myanmar Kyat' },
  { code: 'MNT', description: 'Mongolian Tögrög' },
  { code: 'MRU', description: 'Mauritanian Ouguiya' },
  { code: 'MUR', description: 'Mauritian Rupee' },
  { code: 'MVR', description: 'Maldivian Rufiyaa' },
  { code: 'MWK', description: 'Malawian Kwacha' },
  { code: 'MXN', description: 'Mexican Peso' },
  { code: 'MYR', description: 'Malaysian Ringgit' },
  { code: 'MZN', description: 'Mozambican Metical' },
  { code: 'NAD', description: 'Namibian Dollar' },
  { code: 'NGN', description: 'Nigerian Naira' },
  { code: 'NIO', description: 'Nicaraguan Córdoba' },
  { code: 'NOK', description: 'Norwegian Krone' },
  { code: 'NZD', description: 'New Zealand Dollar' },
  { code: 'PEN', description: 'Peruvian Sol' },
  { code: 'PGK', description: 'Papua New Guinean Kina' },
  { code: 'PHP', description: 'Philippine Peso' },
  { code: 'PKR', description: 'Pakistani Rupee' },
  { code: 'PLN', description: 'Polish Zloty' },
  { code: 'PYG', description: 'Paraguayan Guarani' },
  { code: 'QAR', description: 'Qatari Rial' },
  { code: 'RON', description: 'Romanian Leu' },
  { code: 'RSD', description: 'Serbian Dinar' },
  { code: 'RUB', description: 'Russian Ruble' },
  { code: 'RWF', description: 'Rwandan Franc' },
  { code: 'SAR', description: 'Saudi Riyal' },
  { code: 'SBD', description: 'Solomon Islands Dollar' },
  { code: 'SCR', description: 'Seychellois Rupee' },
  { code: 'SDG', description: 'Sudanese Pound' },
  { code: 'SEK', description: 'Swedish Krona' },
  { code: 'SGD', description: 'Singapore Dollar' },
  { code: 'SLL', description: 'Sierra Leonean Leone' },
  { code: 'SOS', description: 'Somali Shilling' },
  { code: 'SRD', description: 'Surinamese Dollar' },
  { code: 'SSP', description: 'South Sudanese Pound' },
  { code: 'STN', description: 'São Tomé and Príncipe Dobra' },
  { code: 'SVC', description: 'Salvadoran Colón' },
  { code: 'SZL', description: 'Swazi Lilangeni' },
  { code: 'THB', description: 'Thai Baht' },
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
