import React from 'react'
import './App.css'
import Stories from './components/Stories'
import Footer from './components/Footer'
import Header from './components/Header'
import Posting from './components/Posting'
import mutiara from './assets/mutiara.jpg'
import postingPusintek from './assets/posting/1.jpg'
import postingPusintek2 from './assets/posting/2.jpg'
import mumut from './assets/mumut.jpg'
import Post from './components/Post'
import EditCaption from './components/EditCaption'
import avatar from './assets/profile.jpg'
import pupr from './assets/profile/pupr.jpg'
import pfidPost from './assets/posting/pfid.jpg'
import pfid from './assets/profile/pfid.jpg'
import puprPost from './assets/posting/pupr.jpg'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    isVerified: true,
                    avatar: pupr,
                    username: 'kemenpupr',
                    likes: 124,
                    image: puprPost,
                    isImageSquare: false,
                    caption: `Menteri PUPR Basuki Hadimuljono meninjau pembangunan Instalasi Pengolahan Air Limbah (IPAL) dan Tempat Pengolahan Sampah Terpadu (TPST) di Ibu Kota Negara (IKN) Nusantara, Kalimantan Timur pada Selasa (16/1).<br>
                    <br>
                    “Jangan sampai ada keterlambatan dalam konstruksi IPAL maupun TPST. Keduanya harus bisa mulai beroperasi Agustus tahun 2024 ini,” ujar Menteri Basuki.<br>
                    <br>
                    Untuk mengolah air limbah di Kawasan Inti Pusat Pemerintahan (KIPP) IKN Nusantara dibangun IPAL 1,2 dan 3 pada 3 lokasi berkapasitas total 5.000 m3/hari.<br>
                    <br>
                    Pembangunan IPAL ini dimulai awal Desember 2023, dengan progres 14,56%.<br>
                    <br>
                    Teknologi “Moving Bed Biofilm Reactor” diterapkan di IPAL ini untuk mencapai influen yang memenuhi syarat bakumutu sebelum dialirkan ke badan air/sungai.<br>
                    <br>
                    Langkah ini sekaligus penerapan prinsip pembangunan IKN Nusantara sebagai kota pintar berkelanjutan (smart sustainable forest city), dengan pemenuhan syarat baku mutu air limbah sesuai yang ditetapkan dalam “Basic Engineering Design” pembangunan IKN Nusantara.<br>
                    <br>
                    “Instalasi Pengolahan Air Limbah” IKN Nusantara dibangun terintegrasi dengan “Tempat Pengolahan Sampah Terpadu” untuk mensinergikan pengelolaan sanitasi dalam satu lokasi.<br>
                    <br>
                    <span style="color:blue;cursor:pointer;">#SigapMembangunNegeri</span>`,
                    timePost: 'Januari 17, 2024',
                    isDeleted: false
                },
                {
                    avatar: pfid,
                    username: 'pupr_pfid',
                    likes: 1000,
                    image: pfidPost,
                    isImageSquare: true,
                    caption: `Halo #MitraDaerah, Pusat Fasilitasi Infrastruktur Daerah Bidang Perumahan dan Permukiman, Kementerian PUPR saat ini sedang membutuhkan Konsultan Individu untuk Web Developer. <br>
                    <br>
                    Simak Informasi persyaratan teknis dan administrasi dapat dilihat pada postingan di atas ya! <br>
                    <br>
                    Bagi teman-teman yang memenuhi kriteria, segera daftarkan diri kalian dengan mengirimkan dokumen pendukung dan surat lamaran melalui email berikut : perkim.pe@gmail.com cc : leviana.okvianty@pu.go.id dengan subjek: KI_PERKIM_[NAMA] <br>
                    <br>
                    (pendaftaran paling lambat ditutup pada tanggal 19 Januari 2024) <br>
                    <br>
                    <span style="color:blue;cursor:pointer;">#pupr</span> <span style="color:blue;cursor:pointer;">#kementerianpupr</span> <br>
                     <span style="color:blue;cursor:pointer;">#puprsigapmembangunnegeri</span> <br>
                     <span style="color:blue;cursor:pointer;">#puprsiapmelayani</span> <br>
                     <span style="color:blue;cursor:pointer;">#pfidpupr</span> <br>`,
                    timePost: 'October 18, 2023',
                    isDeleted: false
                },
                {
                    avatar: pfid,
                    username: 'dimasputray',
                    likes: 1000,
                    image: mumut,
                    isImageSquare: false,
                    caption: 'あなたは知っていますか？あなたはとてもきれいです',
                    timePost: 'September 23, 2017',
                    isDeleted: true
                },
                {
                    avatar: avatar,
                    username: 'dimasputray',
                    likes: 90000000,
                    image: mutiara,
                    isImageSquare: true,
                    caption: 'Pinky ♥ #vxvina #vexel #vexelart #designgraphic',
                    timePost: 'September 23, 2017',
                    isDeleted: true
                },
                {
                    avatar: avatar,
                    username: 'dimasputray',
                    likes: 15062022,
                    image: postingPusintek,
                    isImageSquare: true,
                    caption: `#Repost @setjenkemenkeu
          • • • • • •
          Hai Sobat Setjen,
          
          Demi mengamankan akun kita dari bahaya kejahatan digital, salah satu cara untuk mengamankan akun kalian yaitu dengan cara mengaktifkan MFA`,
                    timePost: 'September 23, 2017',
                    isDeleted: false
                },
                {
                    avatar: avatar,
                    username: 'dimasputray',
                    likes: 99,
                    image: postingPusintek2,
                    isImageSquare: true,
                    caption: `Hai SobatIT, masih semangat menciptakan lingkungan sehat berintegritas? Yang sehat ternyata bukan hanya badan lho, organisasi dan SDM di lingkungan kantor juga harus sehat. Simak slide di atas yuk siklus #sehatberintegritas untuk diterapkan di lingkungan kantor!`,
                    timePost: 'September 23, 2017',
                    isDeleted: false
                }
            ],
            postToUpload: {},
            postImageIsShow: false,
            editCaptionShow: false
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
            avatar: avatar,
            username: 'dimasputray',
            timePost: 'Desember 5, 2023',
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
        dataToUpdate[id].isDeleted = true

        this.setState({
            posts: dataToUpdate
        })
    }

    _handleSaveCaption = (capt, id) => {
        const { posts, editCaptionShow } = this.state
        let dataToUpdate = posts
        dataToUpdate[id].caption = capt

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
                        handleShowEditCaption={(capt, id) => this._handleShowEditCaption(capt, id)}
                    />
                )
            }
        })

        return postToShow
    }

    render() {
        const { postIdEdit, postImageIsShow, postToUpload, editCaptionShow, captionToEdit } =
            this.state
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
                        handlePost={(data) => this.stagingUpload(data)}
                    />
                    {postImageIsShow && (
                        <Post
                            hideCard={this.toggleCardPost}
                            data={postToUpload}
                            _handlePost={this.addPost}
                        />
                    )}
                    {editCaptionShow && (
                        <EditCaption
                            postId={postIdEdit}
                            caption={captionToEdit}
                            hideCard={this._handleShowEditCaptionCard}
                            saveCaption={(capt, id) => this._handleSaveCaption(capt, id)}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default App
