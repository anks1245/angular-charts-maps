// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class PrimengModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Core UI Components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Toast } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Tooltip } from 'primeng/tooltip';

// --- Safe list of modules ---
const PRIMENG_MODULES = [
  AccordionModule,
  AvatarModule,
  AvatarGroupModule,
  BadgeModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CheckboxModule,
  ChipModule,
  ChipsModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  FloatLabelModule,
  InputNumberModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  MenuModule,
  MenubarModule,
  PanelModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  RippleModule,
  SelectButtonModule,
  SidebarModule,
  SplitButtonModule,
  TabViewModule,
  TagModule,
  TableModule,
  ToastModule,
  ToolbarModule,
  TooltipModule,
  ToggleButtonModule,
];

@NgModule({
  imports: [CommonModule, ...PRIMENG_MODULES],
  exports: [...PRIMENG_MODULES],
})
export class PrimengModule {}

