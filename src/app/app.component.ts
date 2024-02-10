import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

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
  ngOnInit() {
    AOS.init();
  }

  constructor(
    public router: Router,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}
