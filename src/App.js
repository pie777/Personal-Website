import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/experience'
import Expertise from './components/expertise';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Expertise></Expertise>
          <Skills></Skills>
          <Education></Education>
					<Timeline></Timeline>
          <Work></Work>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
