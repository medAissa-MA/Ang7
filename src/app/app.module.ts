import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule, MatIconModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,MatSelectModule, MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
