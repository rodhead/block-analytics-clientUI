import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Users', icon: 'pi pi-fw pi-user-plus',items: [
                {
                    label: 'Active Users',
                    icon:'pi pi-fw pi-user-plus',
                    routerLink:'sys-users'
                },
                {
                    label: 'In-Active Users',
                    icon:'pi pi-fw pi-user-minus',
                }
            ]},
            {label: 'Roles', icon: 'pi pi-fw pi-circle',items: [
              {
                  label: 'Role Management',
                  icon:'pi pi-fw pi-circle',
                  routerLink: 'sys-roles'
              },
          ]},
            {label: 'System Function', icon: 'pi pi-fw pi-code', items: [
              {
                  label: 'System Function Management',
                  icon:'pi pi-fw pi-sync',
                  routerLink: 'sys-func'
              },
          ]}
        ];
    }

}
