import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonRefresher,
  IonRefresherContent,
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { AwsCostService } from 'src/services/aws_services/cost/aws-cost.service';
import { CurrentUserService } from 'src/services/currentUser/current-user.service';
import { addIcons } from 'ionicons';
import { refresh } from 'ionicons/icons';
import { User } from 'src/types';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonRefresher,IonRefresherContent,IonContent, IonHeader, IonTitle, IonToolbar, FormsModule,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonList,IonItem,NgFor,IonIcon,IonLabel,IonSelect,IonSelectOption
  ]
})
export class HomePage implements OnInit {

  constructor(
    private costService: AwsCostService, 
    private currentUserService: CurrentUserService
  ){ 

  }

  currentUser: User = this.currentUserService.getCurrentUser();
  region: string []= [ 
    "us-east-1","us-east-2","us-west-1","us-west-2","ap-northeast-1","ap-northeast-2","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","eu-central-1","eu-west-1","eu-west-2","sa-east-1"
  ];
  costo: any = 0;
  costosPorServicio: { service: string, cost: number }[] = [];

  ngOnInit() {
    this.handleRefresh(null);
    addIcons({ refresh });
  }

  async getMonthlyCost() {
    
     this.costService.getMonthlyCost().subscribe(data => {
      this.costo = data.totalCost;
    })
  }
  async getCostByService() {
    this.costService.getCostByService().subscribe(data => {
      this.costosPorServicio = data.costByService;
    })
  }



  handleRefresh(event: any) {
    this.getMonthlyCost();
    this.getCostByService();
  }
  refreshCost(event: any) {
    setTimeout(() => {
      this.getMonthlyCost();
      this.getCostByService();
      event.target.complete();
    }, 1000);
  }
}
