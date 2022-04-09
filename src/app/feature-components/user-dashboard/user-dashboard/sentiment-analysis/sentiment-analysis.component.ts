import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'primeng/api';
import {
    ConfirmationService,
    MessageService,
    PrimeNGConfig
  } from "primeng/api";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css'],
  providers: [MessageService]
})
export class SentimentAnalysisComponent implements OnInit {

  items!: MenuItem[];
  model!: NgbDateStruct;
    
    constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private primengConfig: PrimeNGConfig
    ) {}
    
    ngOnInit() {
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

}
