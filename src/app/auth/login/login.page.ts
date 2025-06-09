import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonInput, IonInputPasswordToggle, IonCard, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ToastService } from 'src/services/toats/toast.service';
import { CurrentUserService } from 'src/services/currentUser/current-user.service';
import { BiometricService } from 'src/services/biometric/biometric.service';
import { addIcons } from 'ionicons';
import { fingerPrintOutline } from 'ionicons/icons';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonInputPasswordToggle, IonCard, IonButton, ReactiveFormsModule, IonIcon]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  isloggedIn = false;
  isBiometric = false;
  platform: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private currentUserService: CurrentUserService,
    private biometric: BiometricService,
    private pf: Platform
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
    this.platform = this.pf.platforms();

    addIcons({ fingerPrintOutline })
  }
  ngOnInit() {
    this.biometricLogin();
  }

  async onSubmit() {

    if (this.loginForm.invalid) {
      this.toastService.presentToast('Por favor completa todos los campos correctamente.', 'top', 'danger');
      return;
    }

    const { username, password } = this.loginForm.value;


    if (username === 'admin' && password === 'admin') {
      this.toastService.presentToast('Inicio de sesión exitoso!', 'top', 'success');

      this.currentUserService.setCurrentUser({ username, password });
      this.router.navigate(['aws/home']);

    } else {
      this.toastService.presentToast('Credenciales incorrectas.', 'top', 'danger');
    }
  }


  biometricLogin() {

    if (this.platform === 'mobileweb') {
      console.log('Biometric login');

      this.isBiometric = true;
      this.biometric.verifyIdentity('Validar identidad', '').then((result) => {
        if (result) {
          this.router.navigate(['aws/home']);
        }
      });
    }
    else {
      console.log('No biometric login');
      console.log(this.platform);
      this.isBiometric = false;
    }
  }


}
