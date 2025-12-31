import { Component } from '@angular/core';

@Component({
  selector: 'area-trabalho-mac',
  templateUrl: './area-trabalho-mac.component.html',
  styleUrls: ['./area-trabalho-mac.component.scss']
})
export class AreaTrabalhoMacComponent {
 title = 'ProjetoNatalV1';

  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
