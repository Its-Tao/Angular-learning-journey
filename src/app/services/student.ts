import { Injectable } from '@angular/core';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      firstName: 'taofina',
      lastName: 'george',
      email: 'taofinanaswabu@gmail.com',
      course: 'SE',
      age: 34,
      status: 'active',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      course: 'Information Technology',
      age: 20,
      status: 'active',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.j@email.com',
      course: 'Software Engineering',
      age: 50,
      status: 'active',
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah.w@email.com',
      course: 'Data Science',
      age: 40,
      status: 'inactive',
    },
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id === id);
  }

  addStudent(student: Student): void {
    const newId = this.students.length > 0 ? Math.max(...this.students.map((s) => s.id)) + 1 : 1;

    this.students.push({
      ...student,
      id: newId,
    });
  }

  deleteStudent(id: number): void {
  this.students = this.students.filter(student => student.id !== id);
}

updateStudent(updatedStudent: Student): void {
  const index = this.students.findIndex(s => s.id === updatedStudent.id);
  if (index !== -1) {
    this.students[index] = updatedStudent;
  }
}
  }


