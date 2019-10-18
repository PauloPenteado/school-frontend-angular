import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './crud/student/student.component';
import { CourseComponent } from './crud/course/course.component';
import { EmployeeComponent } from './crud/employee/employee.component';
import { PlanComponent } from './crud/plan/plan.component';
import { CreateStudentComponent } from './crud/student/create-student/create-student.component';
import { UpdateStudentComponent } from './crud/student/update-student/update-student.component';
import { CreateCourseComponent } from './crud/course/create-course/create-course.component';

const routes: Routes = [
  {path:'students', component: StudentComponent},
  {path:'students/new', component: CreateStudentComponent},
  {path:'students/edit', component: UpdateStudentComponent},
  {path:'courses', component: CourseComponent},
  {path:'courses/new', component: CreateCourseComponent},
  {path:'employees', component: EmployeeComponent},
  {path:'plans', component: PlanComponent},

  {path:'', redirectTo: 'students', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
