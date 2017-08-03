import React, { Component } from 'react';

class Team extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    return (
      <div className="std-land-section">
        <h3 className='land-title'>TEAM</h3>

        <div className='row'>
          <div className='teammate col-sm-3'>
            <p className='team-title'>TEAMMATE</p>
            <img className='team-pic' src='img/grey-placeholder.png' alt='teammate-1'/>
            <p className='team-desc'>
              Cupcake liquorice jujubes donut. I love fruitcake caramels cookie tootsie roll. Gummies jujubes jujubes. Soufflé sweet roll pudding lemon drops
            </p>
          </div>
          <div className='teammate col-sm-3'>
            <p className='team-title'>TEAMMATE</p>
            <img className='team-pic' src='img/grey-placeholder.png' alt='teammate-2'/>
            <p className='team-desc'>
              Cupcake liquorice jujubes donut. I love fruitcake caramels cookie tootsie roll. Gummies jujubes jujubes. Soufflé sweet roll pudding lemon drops
            </p>
          </div>
          <div className='teammate col-sm-3'>
            <p className='team-title'>TEAMMATE</p>
            <img className='team-pic' src='img/grey-placeholder.png' alt='teammate-3'/>
            <p className='team-desc'>
              Cupcake liquorice jujubes donut. I love fruitcake caramels cookie tootsie roll. Gummies jujubes jujubes. Soufflé sweet roll pudding lemon drops
            </p>
          </div>
          <div className='teammate col-sm-3'>
            <p className='team-title'>TEAMMATE</p>
            <img className='team-pic' src='img/grey-placeholder.png' alt='teammate-4'/>
            <p className='team-desc'>
              Cupcake liquorice jujubes donut. I love fruitcake caramels cookie tootsie roll. Gummies jujubes jujubes. Soufflé sweet roll pudding lemon drops
            </p>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;
