import { Component, OnInit } from '@angular/core';
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
export class StudentForm implements OnInit {
  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    course: '',
    status: 'active',
  };

  isEditMode = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    const studentToEdit = this.studentService.getStudentToEdit();

    if (studentToEdit) {
      this.student = studentToEdit;
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      // Update existing student
      this.studentService.updateStudent(this.student);
      this.studentService.clearStudentToEdit();
      alert('Student updated successfully!');
    } else {
      // Add new student
      this.studentService.addStudent(this.student);
      alert('Student added successfully!');
    }

    // Reset form
    this.resetForm();
  }

  resetForm() {
    this.student = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      course: '',
      status: 'active',
    };
    this.isEditMode = false;
  }
}
