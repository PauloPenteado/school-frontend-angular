import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './crud/student/student.component';
import { CourseComponent } from './crud/course/course.component';
import { EmployeeComponent } from './crud/employee/employee.component';
import { PlanComponent } from './crud/plan/plan.component';

const routes: Routes = [
  {path:'student', component: StudentComponent},
  {path:'course', component: CourseComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'plan', component: PlanComponent},

  {path:'', redirectTo: 'student', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
