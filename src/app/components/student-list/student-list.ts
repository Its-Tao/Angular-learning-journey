import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }
  
  loadStudents(): void {
    this.students = this.studentService.getStudents();

  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id);
      this.loadStudents(); 
    }
  }
  editStudent(student:Student):void {
    this.studentService.setStudentToEdit(student);
  }
}

