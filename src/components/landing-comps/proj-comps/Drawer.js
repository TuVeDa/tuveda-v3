import React, { Component } from 'react';

class Drawer extends Component {

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
      <div className={this.state.active ? 'drawerActive' : 'drawerInactive'}>
        {/* <div className='drawer'> */}
          <div className='row '>
            <h3 className='drawer-title'>{this.state.title}</h3>

            <img className='project-pic col-sm-4' src={this.state.img} alt={this.state.selection}/>

            <div className='col-sm-8'>
              <p className="drawer-des">
                Gummies croissant ice cream gingerbread soufflé. Danish topping apple pie I love jelly beans chocolate bar chocolate cake powder.
                Sesame snaps pudding jelly beans cupcake carrot cake marzipan I love marshmallow chocolate bar.

                <br /><br />

                Jelly cheesecake biscuit jelly halvah. Caramels I love cotton candy. Sesame snaps tart cake tart.
                Cotton candy macaroon lollipop I love cotton candy powder candy canes. I love I love bonbon oat cake.
                Sweet roll chocolate cake I love gummies I love dragée chupa chups I love. Jelly-o icing toffee jelly pastry I love.

                <br /><br />

                Sweet roll chocolate cake I love gummies I love dragée chupa chups I love. Jelly-o icing toffee jelly pastry I love.
              </p>

              <br />

              <button className='row' onClick={() => this.props.shutDrawer()}>
                  I EXIST MUTHAFUCKAS
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Drawer;
