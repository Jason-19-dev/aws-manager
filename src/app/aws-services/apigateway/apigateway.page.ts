import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent,
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonBackButton,

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-apigateway',
  templateUrl: './apigateway.page.html',
  styleUrls: ['./apigateway.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class ApigatewayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
