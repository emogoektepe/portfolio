import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ContactMeComponent,
    TableOfContentsComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
  isMenuOpen: boolean = false;

  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }

}
