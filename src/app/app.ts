import { Component, signal } from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentForm } from './components/student-form/student-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, StudentList, StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
