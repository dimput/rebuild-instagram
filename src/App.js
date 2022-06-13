import React from 'react'
import './App.css';
import Stories from './components/Stories'
import Footer from './components/Footer'
import Header from './components/Header'
import Posting from './components/Posting'
import mutiara from './assets/mutiara.jpg'
import mumut from './assets/mumut.jpg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          likes: 1000,
          image: mumut,
          isImageSquare: false,
          caption: "あなたは知っていますか？あなたはとてもきれいです"
        },
        {
          likes: 90000000,
          image: mutiara,
          isImageSquare: true,
          caption: "Pinky ♥ #vxvina #vexel #vexelart #designgraphic"
        }
      ]
    }
  }
  render() {
    return (
      <div className="Instagram">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Stories />
            {this.state.posts.map((data, i) => {
              return (
                <Posting
                  likes={data.likes}
                  image={data.image}
                  isImageSquare={data.isImageSquare}
                  caption={data.caption} />
              )
            })}
          </div>
          <Footer />
        </div>
      </div>
    );

  }
}

export default App;
