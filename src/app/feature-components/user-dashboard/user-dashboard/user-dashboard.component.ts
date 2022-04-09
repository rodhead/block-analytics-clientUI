import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];
  display = false;

    ngOnInit() {
        this.items = [
            {
            label: 'Metrics',
            icon:'pi pi-fw pi-chart-line',
            styleClass:'',
            expanded: true,
            items: [
                {
                    label: 'Level-1 Metrics',
                    icon:'pi pi-fw pi-plus',
                    routerLink: 'l1-metrics'
                },
                {
                    label: 'Level-2 Metrics',
                    icon:'pi pi-fw pi-trash',
                },
                {
                    label: 'Level-3 Metrics',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
            },
            {
            label: 'Data Frame',
            icon:'pi pi-fw pi-th-large',
            expanded: true,
            items: [
                {
                    label: 'All Feedback (Current Year)',
                    icon:'pi pi-fw pi-align-left',
                    routerLink : 'cy-feedback'
                },
                {
                    label: 'Feedback History',
                    icon:'pi pi-fw pi-align-right',
                    routerLink:'feedback-history'
                }
            ]
            },
            {
            label: 'User Settings',
            icon:'pi pi-fw pi-cog',
            expanded: true,
            items: [
                {
                    label: 'Core Engine Settings',
                    icon:'pi pi-fw pi-cloud',
                    routerLink:'user-settings'

                },
                {
                    label: 'Data View Settings',
                    icon:'pi pi-fw pi-box',
                }
            ]
            },
            {
            label: 'Analysis',
            icon:'pi pi-fw pi-star-fill',
            disabled: false,
            expanded: true,
            items: [
                {
                    label: 'Sentiment Analysis',
                    icon:'pi pi-fw pi-refresh',
                    items: [
                        {
                        label: 'Process Request', 
                        icon: 'pi pi-fw pi-plus',
                        routerLink: 'sentiment-analysis',
                    },
                    {
                        label: 'Process Result', 
                        icon: 'pi pi-pi pi-search',
                    }
                ]
                },
                {
                    label: 'Fuzzy Search',
                    icon:'pi pi-fw pi-bolt',
                }
            ]
            }
        ]
    }

}
