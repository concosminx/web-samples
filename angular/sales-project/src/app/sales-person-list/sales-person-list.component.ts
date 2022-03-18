import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'john.doe@server.com', 40000),
    new SalesPerson('Jimmy', 'Roe', 'jimmy.roe@server.com', 50000),
    new SalesPerson('Joe', 'Doe', 'joe.doe@server.com', 70000),
    new SalesPerson('Jane', 'Doe', 'jane.doeg@server.com', 60000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
