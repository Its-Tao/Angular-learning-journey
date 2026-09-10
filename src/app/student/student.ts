import { Component } from '@angular/core';
import {StudentService} from '../services/student';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student  {
  constructor(private studentService: StudentService) {
    this.studentService.getStudentsFromApi().subscribe(data=>{ console.log(data);
    });
  }
}
