import { Component } from '@angular/core';

@Component({
  selector: 'app-social-section',
  templateUrl: './social-section.component.html',
  styleUrls: ['./social-section.component.scss']
})
export class SocialSectionComponent {
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
