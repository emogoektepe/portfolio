import { CommonModule } from '@angular/common';
import { Component, Inject, SimpleChange, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  language: string = localStorage['lang'] || 'en';

  constructor(@Inject(TranslateService) public translate: TranslateService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.translate.onLangChange.subscribe(() => {
      this.language = this.translate.currentLang;
    });
  }
}
