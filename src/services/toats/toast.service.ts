import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

constructor(private toastController: ToastController) { }


  async presentToast(message: string, position: any, color?: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: color,
      position: position
    });
    await toast.present();
  }
}
