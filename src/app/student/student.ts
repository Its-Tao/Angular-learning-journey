import { Component } from '@angular/core';
import { StudentService } from '../services/student';
import { Student as StudentModel } from '../models/student';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  constructor(private studentService: StudentService) {

    // get student forom api
    this.studentService.getStudentsFromApi().subscribe({
      next: (data) => {
        console.log('Students:', data);
      },
      error: (error) => {
        console.error('GET error:', error);
      },
    });
  }

  // add student to api
  addStudent() {
    const student: StudentModel = {
      id: 0,
      firstName: 'Taofina',
      lastName: 'George',
      email: 'taofina@example.com',
      course: 'SE',
      age: 34,
      status: 'active',
    };

    this.studentService.addStudentToApi(student).subscribe({
      next: (response) => {
        console.log('Student added:', response);
      },
      error: (error) => {
        console.error('POST error:', error);
      },
    });
  }

  //delete student from api
  deleteStudent() {
    this.studentService.deleteStudentFromApi(1).subscribe({
      next: (response) => {
        console.log('Student deleted:', response);
      },
      error: (error) => {
        console.error('DELETE error:', error);
      },
    });
  }
}
