import { Component } from '@angular/core';
import { SingleProjectComponent } from '../../single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [SingleProjectComponent, CommonModule, TranslateModule],
})
export class ProjectsComponent {}
