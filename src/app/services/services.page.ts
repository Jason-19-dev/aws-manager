import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonList,IonCardContent,IonCardHeader,IonCard} from '@ionic/angular/standalone';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonCard,IonList,IonCardContent,IonCardHeader]
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
