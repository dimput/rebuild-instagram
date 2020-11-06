import React from 'react'
import './App.css';
import Stories from './Stories';
import Footer from './Footer';
import Header from './Header';
import Posting from './Posting';
import mutiara from './mutiara.jpg'
import mumut from './mumut.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="Instagram">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Stories />
            <Posting
              likes={12345678}
              image={mumut}
              isImageSquare={false}
              caption={"あなたは知っていますか？あなたはとてもきれいです"}
              />
            <Posting
              likes={90000000}
              image={mutiara}
              isImageSquare={true}
              caption={"Pinky ♥ #vxvina #vexel #vexelart #designgraphic"}
              />
          </div>
          <Footer />
        </div>
      </div>
    );

  }
}

export default App;
