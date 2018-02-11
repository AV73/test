/*
 Import modules from each of the component.
 I have used 3 componets here Records,Welcome,Comments.
 Importing NgModule  from AngularCore
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RecordsComponent }   from './records/records.component';
import { HomeComponent }   from './home/home.component';
import { CommentsComponent }   from './comments/comments.component';
 /*
 Give the path for each of the componet
 */
const appRoutes: Routes = [
  { path: 'records',        component: RecordsComponent },
  { path: 'home',        component: HomeComponent },
  { path: 'comments',        component: CommentsComponent },
  
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}