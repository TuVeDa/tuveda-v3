import React, { Component } from 'react';

class ProjectPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedProj: '',
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    const id = e.target.id;
    console.log('projectID', id)

    if (this.state.selected) {
      this.setState({selectedProj: id})
    } else {
      console.log("selected: TRUE")
      this.setState({
        selected: true,
        selectedProj: id,
      })
    }
  }

  render() {
    return (
      <div className="std-land-section">
        <h3 className='land-title'>PROJECTS</h3>

        <div className='row'>
          <div className='project col-sm-4'>
            <img
              id='0_project'
              className='project-pic'
              src='img/grey-placeholder.png'
              alt='project-1'
              onClick={(e) => this.handleClick(e)}/>
            <p className='project-title'>PROJECT</p>
          </div>
          <div className='project col-sm-4'>
            <img
              id='1_project'
              className='project-pic'
              src='img/grey-placeholder.png'
              alt='project-2'
              onClick={(e) => this.handleClick(e)}
            />
            <p className='project-title'>PROJECT</p>
          </div>
          <div className='project col-sm-4'>
            <img
              id='2_project'
              className='project-pic'
              src='img/grey-placeholder.png'
              alt='project-3'
              onClick={(e) => this.handleClick(e)}
            />
            <p className='project-title'>PROJECT</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPreview;
