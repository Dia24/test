import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NextClientComponent } from './next-client/next-client.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';


const routes:Routes=[
  {path :'', redirectTo:'Previous',  pathMatch:'full'},
  {path:'Next',component:NextClientComponent},
  {path:'Previous',component:ClientComponent}




];


@NgModule({
  declarations: [
    AppComponent,
    NextClientComponent,
    ClientComponent,
    
   
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
     RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
