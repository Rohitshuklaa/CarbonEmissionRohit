import { Component } from '@angular/core';

@Component({
  selector: 'app-governance-section',
  templateUrl: './governance-section.component.html',
  styleUrls: ['./governance-section.component.scss']
})
export class GovernanceSectionComponent {
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
