import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Header, MenuItem } from 'primeng/api';
import {
    ConfirmationService,
    MessageService,
    PrimeNGConfig
  } from "primeng/api";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DashboardAjaxService } from '../../service/dashboard-ajax.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

export interface ExtractResponseObject {
 code:number;
 message:string;
 data:any;
}


@Component({
  selector: 'app-upstream-feedback',
  templateUrl: './upstream-feedback.component.html',
  styleUrls: ['./upstream-feedback.component.css']
})
export class UpstreamFeedbackComponent implements OnInit {
  items!: MenuItem[];
  model!: NgbDateStruct;
  uploadedFiles: any[] = [];
  responseData:any;
  reviewHeader:Array<any>=[];
  fileName:any;

  @ViewChild(DataTableDirective, {static: false})
  public datatableElement!: DataTableDirective;

  dtOptions: any = {};

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }
  persons: any[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private primengConfig: PrimeNGConfig,
        public ajaxService: DashboardAjaxService,
        private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "createdRow":function ( row:any, data:any, index:any ) {
        $(row).attr('row-id', index);
      },
      dom: 'Bfrtip',
      buttons: [
        {
          text: 'Reset All',
          key: '1',
          className:'btn btn-sm  btn-warning',
          init: function(api:any, node:any, config:any) {
            $(node).removeClass('dt-button')
         },
          action: function (e:any, dt:any, node:any, config:any) {
            
          }
        },
        {
          text: 'Submit Mapping',
          key: '1',
          className:'btn btn-sm  btn-dark',
          init: function(api:any, node:any, config:any) {
            $(node).removeClass('dt-button')
         },
          action: function (e:any, dt:any, node:any, config:any) {
            that.submitReviewMapping(dt);
          }
        }
      ]
    };
    
    this.ajaxService.getPermittedColumn().subscribe(
      resp => {
        console.log(resp);
        this.responseData = resp.uploadPermittedColumnName;
      }
    )
    this.primengConfig.ripple = true;
        this.items = [
            {
                label: 'Options',
                items: [{
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.update();
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.delete();
                    }
                }
            ]},
            {
                label: 'Navigate',
                items: [{
                    label: 'Angular Website',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]}
        ];
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}

confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to run the sentiment analysis engine?",
      icon: "pi pi-key",
      accept: () => {
        this.messageService.add({
          severity: "success",
          summary: "Confirmed",
          detail: "Process Request submitted. Process may take several minutes."
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Process Request not submitted",
          detail: "You have canceled the process"
        });
      }
    });
  }

  onUpload(event: { files: any; }) {
    for(let file of event.files) {
      console.log(file)
      this.fileName ="acdc" //file.name;
        this.uploadedFiles.push(file);
    }
    
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

onBasicUpload(event: { files: any; }) {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
}

onBasicUploadAuto(event: { files: any; }) {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}

myUploader(event:any) {
  this.fileName = event.files[0].name
  const formData = new FormData();
  formData.append("file",event.files[0]);
  this.ajaxService.uploadFilePhaseInitial(formData).subscribe(
    resp =>{
      console.log(resp)
      for(let i = 0; i< resp.csv_header.length; i++){
        let newOb ={};
        newOb = {
          name: resp.csv_header[i],
          id: resp.csv_header[i]
        }
        console.log(newOb)
        this.reviewHeader.push(newOb);
      }
    // this.reviewHeader = resp.csv_header;
    }
  )
}

addToList(event:any){
  alert("added");
  console.log(event)
}

submitReviewMapping(dt:any){
  const mappingArray = dt.data();
  let tableData:ExtractResponseObject = this.extractTableData(mappingArray,dt);
  if(this.validateMapping(mappingArray)){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to submit mappings?',
      accept: () => {
          console.log("accepted")
      }
  });
  }else{
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action(FALSE)?',
      accept: () => {
          console.log("accepted")
      }
  });
  }
}

validateMapping(mappingArray: any):boolean {
  let validateFlag = false;
  if(mappingArray.length > 0){
    validateFlag = true;
  }
  return validateFlag;
}

extractTableData(mappingArray: any, dt:any) {
 let responseObjec!: ExtractResponseObject;
 //responseObjec = new ExtractResponseObject();
 let ids = getrowIds(dt);
 for(var i=0; i<mappingArray.length; i++){
   console.log(mappingArray[i][0]);
 }
 console.log(responseObjec);
 responseObjec.code= 1;
 responseObjec.message='acdcd';
 responseObjec.data="cadcd";

 return responseObjec;
}
}

function getrowIds(dt:any){
  var tbl = $('#mappingTable').DataTable();
var id:any;
tbl.rows().every(function () {
  var data = this.data();
  id.push(this.id());
  console.log('Data in id: ' + id + ' is: ' + data);
});
return id;
}
