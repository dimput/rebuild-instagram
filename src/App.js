import React from 'react'
import './App.css';
import Stories from './components/Stories'
import Footer from './components/Footer'
import Header from './components/Header'
import Posting from './components/Posting'
import mutiara from './assets/mutiara.jpg'
import postingPusintek from './assets/posting/1.jpg'
import postingPusintek2 from './assets/posting/2.jpg'
import mumut from './assets/mumut.jpg'
import Post from './components/Post';
import EditCaption from './components/EditCaption';
import avatar from './assets/profile.jpg';
import lkpp_ri_avatar from './assets/profile/lkpp.jpg';
import inabuyer_ev from './assets/posting/inabuyer_ev.jpg';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        
        {
          isVerified:true,
          avatar:lkpp_ri_avatar,
          username:'lkpp_ri',
          likes: 124,
          image: inabuyer_ev,
          isImageSquare: true,
          caption: `Haloo Sobat Kredibel..

          Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP) menerima penghargaan dari Asosiasi Industri Sepeda Motor Listrik (AISMOLI) sebagai Lembaga yang Mendorong dan Membantu Proses Belanja Pemerintah untuk Sepeda Motor Listrik dengan mudah melalui Katalog Elektronik. Penghargaan tersebut diberikan dalam event Inabuyer EV Expo 2023 pada Kamis (30/11). Penghargaan diterima langsung oleh Kepala LKPP Hendrar Prihadi.`,
          timePost:'Desember 05, 2023',
          isDeleted: false
        },
        {
          avatar:avatar,
          username:'dimasputray',
          likes: 1000,
          image: mumut,
          isImageSquare: false,
          caption: "あなたは知っていますか？あなたはとてもきれいです",
          timePost:'September 23, 2017',
          isDeleted: true
        },
        {
          avatar:avatar,
          username:'dimasputray',
          likes: 90000000,
          image: mutiara,
          isImageSquare: true,
          caption: "Pinky ♥ #vxvina #vexel #vexelart #designgraphic",
          timePost:'September 23, 2017',
          isDeleted: true
        },
        {
          avatar:avatar,
          username:'dimasputray',
          likes: 15062022,
          image: postingPusintek,
          isImageSquare: true,
          caption: `#Repost @setjenkemenkeu
          • • • • • •
          Hai Sobat Setjen,
          
          Demi mengamankan akun kita dari bahaya kejahatan digital, salah satu cara untuk mengamankan akun kalian yaitu dengan cara mengaktifkan MFA`,
          timePost:'September 23, 2017',
          isDeleted: false
        },
        {
          avatar:avatar,
          username:'dimasputray',
          likes: 99,
          image: postingPusintek2,
          isImageSquare: true,
          caption: `Hai SobatIT, masih semangat menciptakan lingkungan sehat berintegritas? Yang sehat ternyata bukan hanya badan lho, organisasi dan SDM di lingkungan kantor juga harus sehat. Simak slide di atas yuk siklus #sehatberintegritas untuk diterapkan di lingkungan kantor!`,
          timePost:'September 23, 2017',
          isDeleted: false
        },
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
      avatar:avatar,
      username:'dimasputray',
      timePost:'Desember 5, 2023',
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
            isVerified={data.isVerified}
            avatar={data.avatar}
            username={data.username}
            keyPosting={i}
            likes={data.likes}
            image={data.image}
            isImageSquare={data.isImageSquare}
            timePost={data.timePost}
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
