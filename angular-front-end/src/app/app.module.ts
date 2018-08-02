import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ViewTableComponent } from './view/view-table.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { EmitService } from './common/service/emit.service';
import { AddSentenceComponent } from './add-sentence/add-sentence.component';

import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [
    AppComponent,
    ViewTableComponent,
    NavigatorComponent,
    AddSentenceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    DataTableModule
  ],
  providers: [EmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
