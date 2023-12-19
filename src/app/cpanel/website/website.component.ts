import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  visibleSection: string = 'us';

  showSection(seccion: string): void {
    this.visibleSection = seccion;
  }
}
