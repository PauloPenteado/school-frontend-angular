import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  confirmationMsg: string;

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
    const name = student.firstName + ' ' + student.lastName;
    this.studentService.deleteStudent(url).subscribe(
      (data) =>  {
        this.confirmationMsg = 'Student deleted: '.concat(name);
      }
    );
    this.students.splice(this.students.indexOf(student), 1);
  }

}
