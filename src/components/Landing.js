import React, { Component } from 'react';

import Banner from './landing-comps/Banner';
import BlogPreview from './landing-comps/BlogPreview';
import ContactForm from './landing-comps/ContactForm';
import Mission from './landing-comps/Mission';
import ProjectPreview from './landing-comps/ProjectPreview';
import Team from './landing-comps/Team';

class Landing extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div>
        <Banner />
        <Mission />
        <ContactForm />
        <ProjectPreview />
        <BlogPreview />
        <Team />
      </div>
    )
  }
}

export default Landing;
