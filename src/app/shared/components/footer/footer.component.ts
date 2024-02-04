import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() open: boolean = false;
  @Output() closeMenuBar = new EventEmitter<boolean>();

  closeMenu() {
    this.closeMenuBar.emit(false);
  }
}
