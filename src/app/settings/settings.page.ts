import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonToggle,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonToggle,
    IonIcon
  ]
})

export class SettingsPage implements OnInit {

  constructor(private router: Router) { 
    addIcons({logOutOutline});
  }

  ngOnInit() {
  }

  logout() {
    console.log('Logout');
    this.router.navigate(['aws/login']);
    localStorage.clear();

  }
}
