import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DataTablesResponse } from '../../Model/DataTableResponse';
import { MasterReview} from '../../Model/MasterReview';


@Component({
  selector: 'app-cy-feedback-data',
  templateUrl: './cy-feedback-data.component.html',
  styleUrls: ['./cy-feedback-data.component.css']
})
export class CyFeedbackDataComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  val1=3
  masterReview:MasterReview[] | undefined;

  constructor(
    private http: HttpClient,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            'http://localhost:9393/upstream/getData/THEGRAND-HOT',
            dataTablesParameters, {}
          ).subscribe(resp => {
            this.masterReview = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
    //  ajax: 'http://localhost:9393/upstream/getData/THEGRAND-HOT',
      scrollY: "50%",
      'scrollX': true,
      "processing": true,
      "serverSide": true,
      "createdRow": function ( row:any, data:any, index ) {
        console.log("created row")
    },
      columns: [{
        title: 'Review Id',
        data: 'reviewId',
        width: "5%"
      }, {
        title: 'Date Added',
        data: 'reviewDateCreated',
        width: "10%"
      }, {
        title: 'Entity Id',
        data: 'entityId',
        width: "10%"
      },
      {
        title: 'Review',
        data: 'review',
        width: "55%"
        
      },
      {
        title: 'Review Rating',
        data: 'reviewRating',
        width: "15%",
        searchable: false,
      },
      {
        title: 'Review Url',
        data: 'reviewUrl',
        width: "5%"
      },
      {
      title: 'Action',
      width: "5%"
    }
    ]
    };
    
  }

  getStars(){
    return '<p-rating ></p-rating>'
  }

}
