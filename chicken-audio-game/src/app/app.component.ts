import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  playersArmExtends = false;


  playerExtendsArm(): void {
    console.log("mouse enter", this.playersArmExtends);
    this.playersArmExtends = true;
  }
}
