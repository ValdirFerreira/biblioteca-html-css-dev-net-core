import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblioteca-html-css';


  draggedElement: string = '';
  itemSelect: string = 'left';

  onDragStart(event: any, position: string) {
    this.draggedElement = position;
    event.dataTransfer.setData('text', position);
    event.target.classList.add('dragging');
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.target.classList.add('over');
  }

  onDrop(event: any, position: string) {
    event.preventDefault();
    const draggedElement = this.draggedElement;
    this.draggedElement = '';
    event.target.classList.remove('dragging');
    event.target.classList.remove('over');
    // alert(`Div ${draggedElement} foi movida para ${position}`);

    this.itemSelect = position;

 
  }

  onDragLeave(event: any) {
    event.target.classList.remove('over'); // Remove a classe "over" quando o mouse sai da área de destino
  }

}
