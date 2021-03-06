import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './crud/student/student.component';
import { CourseComponent } from './crud/course/course.component';
import { EmployeeComponent } from './crud/employee/employee.component';
import { PlanComponent } from './crud/plan/plan.component';
import { CreateStudentComponent } from './crud/student/create-student/create-student.component';
import { UpdateStudentComponent } from './crud/student/update-student/update-student.component';
import { CreateCourseComponent } from './crud/course/create-course/create-course.component';
import { UpdateCourseComponent } from './crud/course/update-course/update-course.component';
import { CreateEmployeeComponent } from './crud/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './crud/employee/update-employee/update-employee.component';
import { ScheduleComponent } from './crud/schedule/schedule.component';
import { CreateScheduleComponent } from './crud/schedule/create-schedule/create-schedule.component';

const routes: Routes = [
  {path:'students', component: StudentComponent},
  {path:'students/new', component: CreateStudentComponent},
  {path:'students/edit/:studentId', component: UpdateStudentComponent},
  {path:'courses', component: CourseComponent},
  {path:'courses/new', component: CreateCourseComponent},
  {path:'courses/edit/:courseId', component: UpdateCourseComponent},
  {path:'employees', component: EmployeeComponent},
  {path:'employees/new', component: CreateEmployeeComponent},
  {path:'employees/edit/:employeeId', component: UpdateEmployeeComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'schedule/new', component: CreateScheduleComponent},
  {path:'plans', component: PlanComponent},

  {path:'', redirectTo: 'students', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
