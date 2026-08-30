import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';



@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    course: '',
    status: 'active',
  };

  constructor(private studentService: StudentService) {}

  onSubmit() {
    this.studentService.addStudent(this.student);

    // Reset form
    this.student = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      course: '',
      status: 'active',
    };

    alert('Student added successfully!');
  }
}
