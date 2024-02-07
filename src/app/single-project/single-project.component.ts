import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Project {
  image: string;
  name: string;
  language: string;
  description: string;
  live: string;
  github: string;
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
      image: './assets/images/join.png',
      name: 'Join',
      language: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      live: 'https://join.emre-goektepe.com/',
      github: 'https://github.com/emogoektepe/join-742',
    },
    {
      image: './assets/images/polloLoco.png',
      name: 'El Pollo Loco',
      language: 'JavaScript | HTML | CSS ',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      live: 'https://elpolloloco.emre-goektepe.com/',
      github: 'https://github.com/emogoektepe/El-Pollo-Loco',
    },
  ];
}
