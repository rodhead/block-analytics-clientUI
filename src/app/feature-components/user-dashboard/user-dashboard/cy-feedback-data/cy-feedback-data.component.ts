import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { DataTablesResponse } from '../../Model/DataTableResponse';
import { FeedbackViewModelObject } from '../../Model/FeedbackViewModelObject';
import { MasterReview} from '../../Model/MasterReview';
import { DashboardAjaxService } from '../../service/dashboard-ajax.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

import * as  Notiflix from 'notiflix';


@Component({
  selector: 'app-cy-feedback-data',
  templateUrl: './cy-feedback-data.component.html',
  styleUrls: ['./cy-feedback-data.component.css']
})
export class CyFeedbackDataComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  val1=3
  masterReview:MasterReview[] | undefined;
  selectedProductType!: any[];
  productType!:any[];
  filteredProductType!: any[];
  modelObject !: FeedbackViewModelObject;
  

  constructor(
    private http: HttpClient,
    private primengConfig: PrimeNGConfig,
    public ajaxService: DashboardAjaxService
  ) { 

    this.ajaxService.getViewModelObject().subscribe(
      resp=>{
        this.productType = resp.productTypeFilterData;
         //this.modelObject.productType = this.productType;
        console.log( this.modelObject);
      }
    )
  }

  ngOnInit(): void {
    Notiflix.Loading.hourglass('Processing...',{
      //backgroundColor: 
    });
   // this.productType = this.modelObject.productType;
    this.primengConfig.ripple = true;
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .post<DataTablesResponse>(
            'http://localhost:9393/view/feedback/data',
            dataTablesParameters, {}
          ).subscribe(resp => {
            Notiflix.Block.dots('#feedbackTable','Fetching Data...',{
              //backgroundColor: 
            });
            this.masterReview = resp.data;
            Notiflix.Loading.remove();
            Notiflix.Block.remove('#feedbackTable');
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
      "processing": false,
      "serverSide": true,
      "createdRow": function ( row:any, data:any, index ) {
        console.log("created row")
    },
      columns: [{
        title: 'Review Id',
        data: 'id',
        width: "5%",
        visible: false
      },  {
        title: 'Review Header',
        data: 'summary',
        width: "20%"
      },
      {
        title: 'Review',
        data: 'text',
        width: "55%"
        
      },
      {
        title: 'Review Rating',
        data: 'score',
        width: "15%",
        searchable: false,
      },
      {
        title: 'Product Id',
        data: 'productId',
        width: "5%"
      },
      {
      title: 'Action',
      width: "5%"
    }
    ]
    };
    //Notiflix.Loading.remove(2000);
  }

  getStars(){
    return '<p-rating ></p-rating>'
  }

  filterCountry(event:any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.modelObject.productType.length; i++) {
      let country = this.modelObject.productType[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredProductType = filtered;
  }

}
