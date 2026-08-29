import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';


@Component({
  selector: 'app-student-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: Student[]=[];

  constructor( private studentService:StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}

