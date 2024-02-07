import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  @Input() open: boolean = false;
  @Output() closeMenuBar = new EventEmitter<boolean>();

  closeMenu() {
    this.closeMenuBar.emit(false);
  }
}
