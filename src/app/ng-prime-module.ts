import { NgModule } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule} from 'primeng/card';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {RippleModule} from 'primeng/ripple';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule, } from 'primeng/fieldset';
import {TooltipModule} from 'primeng/tooltip';
import { DividerModule } from "primeng/divider";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  exports: [
    AutoCompleteModule,
    ButtonModule,
    CascadeSelectModule,
    CheckboxModule,
    CardModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MultiSelectModule,
    RippleModule,
    RadioButtonModule,
    SplitButtonModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    SidebarModule,
    PanelMenuModule,
    BreadcrumbModule,
    MenuModule,
    PanelModule,
    ToastModule,
    FieldsetModule,
    TooltipModule,
    DividerModule,
    ConfirmPopupModule,
    FileUploadModule,
    TabViewModule,
    RatingModule,
    SliderModule,
    TagModule,
    TableModule,
    ConfirmDialogModule
  ]
})
export class NgPrimeModule{}