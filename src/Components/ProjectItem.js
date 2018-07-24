import React, { Component } from 'react';
import Project from './Project';



class ProjectItem extends Component {

  render() {
    return (
      <li className="Project">
        <strong>{this.props.list.title}</strong> - {this.props.list.category}
        
      </li>
    );
  }
}

Project.prototypes = {
    projects: React.Prototypes.array
}

export default ProjectItem ;
