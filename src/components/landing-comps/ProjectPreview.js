import React, { Component } from 'react';
import ProjectTile from './proj-comps/ProjectTile';
import Drawer from './proj-comps/Drawer';

class ProjectPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selection: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.shutDrawer = this.shutDrawer.bind(this);
  };

  handleClick(e) {
    const id = e.target.id;
    console.log('projectID', id)

    if (this.state.active) {
      this.setState({selection: id})
    } else {
      console.log("active: TRUE")
      this.setState({
        active: true,
        selection: id,
      })
    }
  }

  shutDrawer() {
    console.log("DRAWER SHUT")
    console.log("active: FALSE")

    this.setState({
      active: false
    })
  }

  render() {
    return (
      <div className="std-land-section">
        <h3 className='land-title'>PROJECTS</h3>

        <div className='row'>
          <ProjectTile
            id='0_project'
            active={this.state.active}
            selected={this.state.selection === '0_project'}
            handleClick={this.handleClick}
          />
          <ProjectTile
            id='1_project'
            active={this.state.active}
            selected={this.state.selection === '1_project'}
            handleClick={this.handleClick}
          />
          <ProjectTile
            id='2_project'
            active={this.state.active}
            selected={this.state.selection === '2_project'}
            handleClick={this.handleClick}
          />
        </div>
          <Drawer
            active={this.state.active}
            shutDrawer={this.shutDrawer}
          />
      </div>
    )
  }
}

export default ProjectPreview;
