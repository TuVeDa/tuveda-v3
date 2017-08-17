import React, { Component } from 'react';

class ProjectPreview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    
    return (
      <div className="std-land-section">
        <h3 className='land-title'>PROJECTS</h3>

        <div className='row'>
          <div className='project col-sm-4'>
            <img className='project-pic' src='img/grey-placeholder.png' alt='project-1'/>
            <p className='project-title'>PROJECT</p>
          </div>
          <div className='project col-sm-4'>
            <img className='project-pic' src='img/grey-placeholder.png' alt='project-2'/>
            <p className='project-title'>PROJECT</p>
          </div>
          <div className='project col-sm-4'>
            <img className='project-pic' src='img/grey-placeholder.png' alt='project-3'/>
            <p className='project-title'>PROJECT</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPreview;
