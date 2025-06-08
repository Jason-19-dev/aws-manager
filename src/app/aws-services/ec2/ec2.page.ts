import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem,IonLabel,IonIcon,IonButtons,IonBackButton,IonButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Instance } from 'src/types';
import { listCircle, hardwareChipOutline} from 'ionicons/icons';
import { Ec2Service } from 'src/services/aws_services/ec2/ec2.service';

@Component({
  selector: 'app-ec2',
  templateUrl: './ec2.page.html',
  styleUrls: ['./ec2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonItem,IonIcon,IonBackButton,IonButtons,IonLabel,IonButton]
})

export class Ec2Page implements OnInit {

  instances: Instance[] = [];
  constructor(private ec2Service: Ec2Service) {
    addIcons({listCircle,hardwareChipOutline});
   }

  ngOnInit() {
    this.describeInstances();
  }

  describeInstances() {
    this.ec2Service.describeInstances({}).subscribe(data => 
      this.instances = data.instances
    );
  }

  startInstance(instanceId:string) {
    this.ec2Service.instances({action: 'start',InstanceId: instanceId});
  }
  stopInstance(instanceId:string) {
    this.ec2Service.instances({action: 'stop',InstanceId: instanceId}).subscribe(data =>  
      console.log(data)
    );
  }
}
