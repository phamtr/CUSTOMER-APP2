import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService, AdminService]
})
export class LoginComponent implements OnInit {

  companyname: String='';
  form;
  message;
  messageClass;
  processing = false;
  previousUrl;

  constructor(private service: ApiService, private formBuilder: FormBuilder, public productService: AdminService    , private router: Router) { this.createForm(); }
  createForm(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  disableForm(){
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
  }
  enableForm(){
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
  }

  onLoginSubmit(){
    
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
   this.productService.LoginCompany(user.email, user.password)
    .subscribe(data => { console.log(data),
      this.service.logInAdmin();
      this.router.navigate(['/products']);
    })
    
    
  }
  ngOnInit() {
   
    }

}
