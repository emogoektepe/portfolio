import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  @Output() isMenuOpenChange = new EventEmitter<boolean>();
  @Input() open: boolean = false;

  toggleMenu() {
    this.isMenuOpenChange.emit(!this.open);
  }
}
