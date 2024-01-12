import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() project: any;

  constructor() { }

  handleClick(event: Event) {
    if (this.project.githubLink === 'javascript:void(0)') {
      event.preventDefault();
    }
  }

  toggleReadMore(project: { isExpanded: boolean; }) {
    project.isExpanded = !project.isExpanded;
  }

  ngOnInit(): void {
  }
}
