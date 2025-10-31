import { Component } from '@angular/core';

@Component({
  selector: 'app-modo-dark',
  templateUrl: './modo-dark.component.html',
  styleUrls: ['./modo-dark.component.scss']
})
export class ModoDarkComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    const styleId = 'dark-mode-styles';
    const existingStyle = document.getElementById(styleId);

    if (existingStyle) existingStyle.remove();

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');

      const style = document.createElement('style');
      style.id = styleId;
      style.innerText = this.genereteDarkMode(this.colors);
      document.head.appendChild(style);
    }
    else {
      document.body.classList.remove('dark-mode');

    }
  }


  colors = {
    background: '#121212',
    primaryText: '#FFFFFF'
  }

  genereteDarkMode(color: any) {
    return `
    body.dark-mode {
      background-color: ${color.background} !important;
      color: ${color.primaryText} !important;
      font-family: Arial, sans-serif;
    }

body.dark-mode .box{
  background-color: red !important;
  }
    
  `;
  }
}



