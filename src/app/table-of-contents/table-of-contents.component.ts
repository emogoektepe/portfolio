import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss',
})
export class TableOfContentsComponent {
  @Output() closeMenuBar = new EventEmitter<boolean>();

  ngOnInit() {
    window.scrollTo(0,0);
  }

  closeTOC() {
    this.closeMenuBar.emit(false);
  }
}
