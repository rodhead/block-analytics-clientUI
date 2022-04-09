import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cy-feedback-data',
  templateUrl: './cy-feedback-data.component.html',
  styleUrls: ['./cy-feedback-data.component.css']
})
export class CyFeedbackDataComponent implements OnInit {
  
  dtOptions: any = {};

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.dtOptions = {
      ajax: 'http://localhost:9393/cy/cy-feedback',
      columns: [{
        title: 'Review Id',
        data: 'id'
      }, {
        title: 'Date Added',
        data: 'firstName'
      }, {
        title: 'Review Title',
        data: 'lastName',
        class: 'none'
      },
      {
        title: 'Review Text',
        data: 'lastName',
        class: 'none'
      },
      {
        title: 'Category',
        data: 'lastName',
        class: 'none'
      },
      {
        title: 'City',
        data: 'lastName',
        class: 'none'
      },
      {
        title: 'Country',
        data: 'lastName',
        class: 'none'
      },
      {
        title: 'Hotel Name',
        data: 'lastName',
        class: 'none'
      }
    ],
      // Use this attribute to enable the responsive extension
      responsive: true
    };
  }

}
