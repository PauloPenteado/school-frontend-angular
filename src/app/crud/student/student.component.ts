import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from '../../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      (students) => {
        this.students = students
        console.log('students: ', students);
      }
    );
    
  }

  deleteStudent(url: string){
    this.studentService.deleteStudent(url);
  }

}
