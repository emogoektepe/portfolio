import { Component } from '@angular/core';
import { SingleProjectComponent } from '../../single-project/single-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [SingleProjectComponent, CommonModule],
})
export class ProjectsComponent {}
