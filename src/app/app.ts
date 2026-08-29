import { Component, signal } from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { StudentList } from './components/student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
