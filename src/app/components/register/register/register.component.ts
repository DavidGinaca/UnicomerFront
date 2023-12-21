import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from 'src/app/services/user/new-user.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

goback() {
  this.router.navigate(['/inicio']);
}
  
  registerForm: FormGroup;


  constructor( public formBuilder: FormBuilder, public newUser: NewUserService, private router: Router ) {

    this.registerForm = formBuilder.group({
      username:['',[Validators.required,Validators.minLength(7)]],
      password: ['',Validators.required],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email:['',[Validators.required,Validators.email]]
      
    });
  
  }

  register() {
    if(this.registerForm.valid){
      this.newUser.createUser(this.registerForm.value).subscribe(
        response => {
          alert('Usuario creado');
          console.log(response);
          this.router.navigateByUrl('/inicio');
        })
      }else{
      this.registerForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
      }
  }

  
 


}
