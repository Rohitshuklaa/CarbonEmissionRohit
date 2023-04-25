import { Component } from '@angular/core';

@Component({
  selector: 'app-water-section',
  templateUrl: './water-section.component.html',
  styleUrls: ['./water-section.component.scss']
})
export class WaterSectionComponent {
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
