import React, { Component } from 'react';
import ProjectTile from './proj-comps/ProjectTile';
import Drawer from './proj-comps/Drawer';

class ProjectPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selection: '',
      title: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.shutDrawer = this.shutDrawer.bind(this);
  };

  handleClick(e) {
    const id = e.target.id;
    const title = e.target.title;

    console.log("ACTIVE & projectID:", id)
    this.setState({
      active: true,
      selection: id,
      title: title
    })
  }

  shutDrawer() {
    console.log("DRAWER SHUT & INACTIVE")

    this.setState({
      active: false
    })
  }

  render() {
    return (
      <div className="std-land-section">

        <div className={this.state.active ? 'projectRow-hidden' : 'row'}>
          <h3 className='land-title'>PROJECTS</h3>

          <ProjectTile
            id='0_project'
            active={this.state.active}
            handleClick={this.handleClick}
            title='Project 0'
            img='img/0_project.png'
          />
          <ProjectTile
            id='1_project'
            active={this.state.active}
            handleClick={this.handleClick}
            title='Project 1'
            img='img/1_project.png'
          />
          <ProjectTile
            id='2_project'
            active={this.state.active}
            handleClick={this.handleClick}
            title='Project 2'
            img='img/2_project.png'
          />
        </div>

        <Drawer
          active={this.state.active}
          shutDrawer={this.shutDrawer}
          img={'img/'+ this.state.selection + '.png'}
          title={this.state.title}
          selection={this.state.selection}
        />
      </div>
    )
  }
}

export default ProjectPreview;
