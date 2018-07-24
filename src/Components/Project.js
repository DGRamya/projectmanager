import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Project extends Component {
  

  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
           // console.log(project);
           return(
            <ProjectItem key={project.title} list={project} />

        );
        });

        
    }
    return (
      <div className="Project">
      <h3> Latest Projects </h3> <br /> 
        {projectItems}
      </div>
    );
  }
}

export default Project ;
