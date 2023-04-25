import { Component } from '@angular/core';

@Component({
  selector: 'app-waste-section',
  templateUrl: './waste-section.component.html',
  styleUrls: ['./waste-section.component.scss']
})
export class WasteSectionComponent {
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
