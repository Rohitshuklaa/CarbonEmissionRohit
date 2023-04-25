import { Component } from '@angular/core';

@Component({
  selector: 'app-emission-section',
  templateUrl: './emission-section.component.html',
  styleUrls: ['./emission-section.component.scss']
})
export class EmissionSectionComponent {
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
