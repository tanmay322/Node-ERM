import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../shared/student.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers : [StudentService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.studentService.postStudent(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false,4000);
        this.resetForm(form);
      },
      err => {
        if (err.status == 422){
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = "SOmething went wrong!!!";
      }
    );
 
  }
  resetForm(form: NgForm) {
    this.studentService.selectedStudent = {
      firstName: '',
      lastName: '',
      studentid: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
