import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectService } from 'src/core/project';

const styles: string = require('./projects.scss');
const template: string = require('./projects.html');


@Component({
  directives: [NgFor],
  selector: 'projects',
  styles: [styles],
  template,
  viewProviders: [ProjectService]
})

export class Projects {
  loaded: Promise<any>;

  constructor(public projects: ProjectService) {
    this.loaded = projects.fetchProjects(1234);
  }
}
