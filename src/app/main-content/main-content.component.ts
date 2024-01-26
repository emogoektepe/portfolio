import { Component } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [LandingPageComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ContactMeComponent]
})
export class MainContentComponent {

}
