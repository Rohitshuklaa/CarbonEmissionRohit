import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-section',
  templateUrl: './energy-section.component.html',
  styleUrls: ['./energy-section.component.scss']
})
export class EnergySectionComponent {
  display = "none";
  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
