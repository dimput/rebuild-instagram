import React from 'react'
import './App.css';
import Stories from './components/Stories'
import Footer from './components/Footer'
import Header from './components/Header'
import Posting from './components/Posting'
import mutiara from './assets/mutiara.jpg'
import mumut from './assets/mumut.jpg'
import Post from './components/Post';
import EditCaption from './components/EditCaption';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          likes: 1000,
          image: mumut,
          isImageSquare: false,
          caption: "あなたは知っていますか？あなたはとてもきれいです",
          isDeleted: true
        },
        {
          likes: 90000000,
          image: mutiara,
          isImageSquare: true,
          caption: "Pinky ♥ #vxvina #vexel #vexelart #designgraphic",
          isDeleted: false
        }
      ],
      postToUpload: {},
      postImageIsShow: false,
      editCaptionShow: false,
    }
  }

  toggleCardPost = () => {
    const { postImageIsShow } = this.state
    this.setState({
      postImageIsShow: !postImageIsShow
    })
  }

  stagingUpload = (data) => {
    this.setState({
      postToUpload: data
    })
  }

  addPost = (data) => {
    const { posts } = this.state
    let dataToUpdate = posts
    dataToUpdate.push({
      likes: 0,
      image: data.image,
      isImageSquare: data.isImageSquare,
      caption: data.caption,
      isDeleted: data.isDeleted
    })
    this.setState({
      posts: dataToUpdate,
      postImageIsShow: false
    })
  }

  deletePost = (id) => {
    const { posts } = this.state
    let dataToUpdate = posts
    dataToUpdate[id].isDeleted = true;

    this.setState({
      posts: dataToUpdate
    })
  }

  _handleSaveCaption = (capt, id) => {
    const { posts, editCaptionShow } = this.state
    let dataToUpdate = posts
    dataToUpdate[id].caption = capt;

    this.setState({
      posts: dataToUpdate,
      editCaptionShow: !editCaptionShow
    })
  }

  setCaptionToEdit = (capt, postId) => {
    this.setState({
      postIdEdit: postId,
      captionToEdit: capt
    })
  }

  _handleShowEditCaption = (capt, postId) => {
    this.setCaptionToEdit(capt, postId)
    this._handleShowEditCaptionCard()
  }

  _handleShowEditCaptionCard = () => {
    const { editCaptionShow } = this.state
    this.setState({ editCaptionShow: !editCaptionShow })
  }

  renderPosts = () => {
    const { posts } = this.state
    // eslint-disable-next-line array-callback-return
    const postToShow = posts.map((data, i) => {
      if (!data.isDeleted) {
        return (
          <Posting
            key={i}
            keyPosting={i}
            likes={data.likes}
            image={data.image}
            isImageSquare={data.isImageSquare}
            caption={data.caption}
            handleDelete={(id) => this.deletePost(id)}
            handleShowEditCaption={(capt, id) => this._handleShowEditCaption(capt, id)} />
        )
      }
    })

    return postToShow
  }

  render() {
    const { postIdEdit, postImageIsShow, postToUpload, editCaptionShow, captionToEdit } = this.state
    return (
      <div className="Instagram">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Stories />
            {this.renderPosts()}
          </div>
          <Footer
            showCard={this.toggleCardPost}
            handlePost={(data) => this.stagingUpload(data)} />
          {postImageIsShow &&
            <Post hideCard={this.toggleCardPost} data={postToUpload} _handlePost={this.addPost} />}
          {editCaptionShow && <EditCaption postId={postIdEdit} caption={captionToEdit} hideCard={this._handleShowEditCaptionCard} saveCaption={(capt, id) => this._handleSaveCaption(capt, id)} />}
        </div>
      </div>
    );

  }
}

export default App;
