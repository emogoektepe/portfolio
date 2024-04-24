import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() projects: Project[] = [
    {
      image: './assets/images/join.png',
      name: 'Join',
      language: 'JavaScript | HTML | CSS',
      description: 'projectJoinText',
      live: 'https://join.emre-goektepe.com/',
      github: 'https://github.com/emogoektepe/join-742',
    },
    {
      image: './assets/images/polloLoco.png',
      name: 'El Pollo Loco',
      language: 'JavaScript | HTML | CSS ',
      description: 'projectPolloText',
      live: 'https://elpolloloco.emre-goektepe.com/',
      github: 'https://github.com/emogoektepe/El-Pollo-Loco',
    },
    {
      image: './assets/images/dabubble.png',
      name: 'DABubble',
      language: 'Angular | Firebase | TypeScript | SCSS | HTML',
      description: 'projectDABubble',
      live: '',
      github: '',
    },
  ];
}
