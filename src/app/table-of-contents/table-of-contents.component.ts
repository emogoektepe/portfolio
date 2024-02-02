import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss',
})
export class TableOfContentsComponent {

  @Output() closeMenuBar = new EventEmitter<boolean>();
  
  closeTOC() {
    this.closeMenuBar.emit(false);
  }
}
