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
  @Input() open!: boolean;
  imageIndex = 0;
  imageSources = [
    './assets/images/burger1.svg',
    './assets/images/burger2.svg',
    './assets/images/burger3.svg',
    './assets/images/burger4.svg',
    './assets/images/burger5.svg',
  ];
  currentImage = this.imageSources[this.imageIndex];

  ngOnChanges() {
    const interval = setInterval(() => {
      if (!this.open) {
        if (this.imageIndex > 0) {
          this.imageIndex--;
          this.currentImage = this.imageSources[this.imageIndex];
        } else {
          clearInterval(interval);
        }
      } else {
        if (this.imageIndex < this.imageSources.length - 1) {
          this.imageIndex++;
          this.currentImage = this.imageSources[this.imageIndex];
        } else {
          clearInterval(interval);
        }
      }
    }, 70);
  }

  toggleMenu() {
    this.isMenuOpenChange.emit(!this.open);
  }

  closeMenu() {
    this.isMenuOpenChange.emit(false);
  }
}
