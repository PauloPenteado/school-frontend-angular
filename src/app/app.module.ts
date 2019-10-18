import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './crud/course/course.component';
import { EmployeeComponent } from './crud/employee/employee.component';
import { StudentComponent } from './crud/student/student.component';
import { PlanComponent } from './crud/plan/plan.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StudentService } from './student.service';
import { CreateStudentComponent } from './crud/student/create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './crud/student/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    EmployeeComponent,
    StudentComponent,
    PlanComponent,
    TopBarComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
