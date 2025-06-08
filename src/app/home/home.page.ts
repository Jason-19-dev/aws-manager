import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRefresher,IonRefresherContent,IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardContent,IonCardTitle,IonList,IonItem,IonIcon} from '@ionic/angular/standalone';
import { AwsCostService } from 'src/services/aws_services/cost/aws-cost.service';
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonRefresher,IonRefresherContent,IonContent, IonHeader, IonTitle, IonToolbar, FormsModule,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonList,IonItem,NgFor,IonIcon]
})
export class HomePage implements OnInit {

  constructor(private costService: AwsCostService) { }
  costo: any = 0;
  costosPorServicio: { service: string, cost: number }[] = [];
  ngOnInit() {
    // this.getMonthlyCost();
    // this.getCostByService();
    addIcons({ refreshOutline });
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
    setTimeout(() => {
      this.getMonthlyCost();
      this.getCostByService();
      event.target.complete();
    }, 2000);
  }
  refreshCost(event: any) {
    setTimeout(() => {
      this.getMonthlyCost();
      this.getCostByService();
      event.target.complete();
    }, 2000);
  }
}
