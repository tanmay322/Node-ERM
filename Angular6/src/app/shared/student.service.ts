import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student = {
    firstName: '',
    lastName: '',
    studentid: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    return this.http.post(environment.apiBaseUrl+'/register',student);
  }
}
