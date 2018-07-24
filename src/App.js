import React, { Component } from 'react';
import Project from './Components/Project';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {

  constructor(){
    super(); 
    this.state = {
      
      projects: []
    }
  }

  componentDidMount(){
    this.setState({projects :[
      {
        title:  'Business Website',
        category: 'Web Design'
      },
      {
        title:  'Social App',
        category: 'Mobile Development'
      },
      {
        title:  'E Commerce Shopping C art',
        category: 'Web  Development'
      }
    ]})
  }

  handleAddProject(project){
   let proj = this.state.projects;
   proj.push(project);
   this.setState({projects:proj});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
