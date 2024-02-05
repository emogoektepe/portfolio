import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { }


  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}
