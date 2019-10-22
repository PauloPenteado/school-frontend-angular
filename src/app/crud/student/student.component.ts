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
      (data) => {
        this.students = data
      },
      (error) => {
        console.error('Error: ',error);
      }
    );
    
  }

  deleteStudent(url: string, student: Student){
    this.studentService.deleteStudent(url).subscribe();
    this.students.splice(this.students.indexOf(student), 1);
  }

}
