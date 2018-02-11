import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { RecordsComponent } from './records/records.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

// Import all the Routing Modules into NgModule

import {AppRoutingModule} from './app.routes';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
     FormsModule,
    AppRoutingModule ,
    RouterModule,
    NgbModule.forRoot() 

  ],
  // All the componets used in the application are declared declarations
  declarations: [ AppComponent, NavComponent,
    RecordsComponent,
    HomeComponent,
    CommentsComponent, ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }

