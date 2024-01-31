import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Project {
  projectImage: string;
  projectName: string;
  projectLanguage: string;
  projectDescription: string;
}

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() projects: Project[] = [
    {
      projectImage: './assets/images/join.png',
      projectName: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      projectDescription:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
    },
    {
      projectImage: './assets/images/polloLoco.png',
      projectName: 'El Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS ',
      projectDescription:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
  ];
}
