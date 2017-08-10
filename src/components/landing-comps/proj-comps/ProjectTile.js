import React, { Component } from 'react';

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  };

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    return (
      <div className='project col-sm-4'
        >
        <img
          id={this.state.id}
          className='project-pic'
          src={this.state.img}
          alt={this.state.id}
          title={this.state.title}
          onClick={(e) => this.props.handleClick(e)}
        />
        <p className='project-title'>{this.state.title}</p>
      </div>
    )
  }
}

export default ProjectTile;
