import React, { Component } from 'react'
import profile from '../assets/profile.jpg';

export class Posting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loveIcon: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
            scale: 0,
            isLove: false,
            likes: 0,
            caption: "",
            image: "",
            isShowMore: false
        };
    }

    iconLoveOnHover = () => {
        if (!this.state.isLove) {
            this.setState({
                loveIcon: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
                colorLove: "#ed4956"
            })
        }
    }

    componentDidMount(){
        this.setState({
            likes : this.props.likes
        })
    }
    iconLoveOffHover = () => {
        if (!this.state.isLove) {
            this.setState({
                loveIcon: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
                colorLove: "#262626"
            })
        }
    }

    iconClicked = () => {
        if (this.state.isLove) {
            this.setState({
                loveIcon: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
                colorLove: "#262626",
                isLove: false,
                likes: this.state.likes - 1
            });
        }else{
            this.onDoubleClick()
        }
    }

    onDoubleClick = () => {
        this.setState({
            scale: 1,
            loveIcon: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
            colorLove: "#ed4956",
            isLove: true,
            likes: this.state.isLove ? this.state.likes : this.state.likes + 1
        });
        this.timerLove = setInterval(
            () => this.tick(),
            1500
        );
    }

    tick() {
        this.setState({
            scale: 0,
        });
        clearInterval(this.timerLove);
    }

    handleDoubleClickPhone = (e) => {
        if (
            this.lastClick &&
            e.timeStamp - this.lastClick < 250 &&
            this.watingClick
        ) {
            this.lastClick = 0;
            clearTimeout(this.watingClick);
            this.onDoubleClick()
            this.watingClick = null;
        } else {
            this.lastClick = e.timeStamp;
            this.watingClick = setTimeout(() => {
                this.watingClick = null;
            }, 251);
        }
    }

    toggleMore = () => {
        const { isShowMore } = this.state
        this.setState({
            isShowMore: !isShowMore
        })
    }

    render() {
        const { handleDelete,handleShowEditCaption,keyPosting,caption,image,avatar,username,isVerified,timePost } = this.props
        const {isShowMore,likes} = this.state
        return (
            <div className="posting">
                <div className="posting-title">
                    <div className="posting-profile">
                        <img src={avatar} alt="profile" />
                    </div>
                    <div className="posting-username">
                        {username}
                        {isVerified && <svg aria-label="Sudah Diverifikasi" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12" style={{marginLeft:'5px',marginRight:'7px',marginBottom:'-2px'}}><title>Sudah Diverifikasi</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>}
                    </div>
                    <div className="posting-more" onClick={() => this.toggleMore()}>...</div>
                    {isShowMore &&
                            <div className="posting-more-dropdown">
                                <div className='posting-more-dropdown-item' onClick={() => handleShowEditCaption(caption,keyPosting)}>Edit Caption</div>
                                <div className='posting-more-dropdown-item' onClick={() => handleDelete(this.props.keyPosting)}>Hapus</div>
                            </div>
                    }
                </div>
                <div className={this.props.isImageSquare ? "posting-content square" : "posting-content"} onClick={this.handleDoubleClickPhone} onDoubleClick={this.onDoubleClick}>
                    <div className="love-tap" style={{ transform: "scale(" + this.state.scale + ")" }}>
                        <svg viewBox="-5 -3 60 55" width="100" height="90">
                            <defs>
                                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#bc1888", stopOpacity: "1" }} />
                                    <stop offset="25%" style={{ stopColor: "#cc2366", stopOpacity: "1" }} />
                                    <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: "1" }} />
                                    <stop offset="75%" style={{ stopColor: "#e6683c", stopOpacity: "1" }} />
                                    <stop offset="100%" style={{ stopColor: "#f09433", stopOpacity: "1" }} />
                                </linearGradient>
                            </defs>
                            <path fill="url(#grad2)" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                    </div>
                    <img src={image} alt="content" />
                </div>
                <div className="posting-button">
                    <svg
                        onMouseEnter={this.iconLoveOnHover}
                        onMouseLeave={this.iconLoveOffHover}
                        onClick={this.iconClicked}
                        style={{ marginLeft: "0px" }} aria-label="Suka" className="_8-yf5 " fill={this.state.colorLove} height="24" viewBox="0 0 48 48" width="24"><path d={this.state.loveIcon}></path></svg>
                    <svg aria-label="Komentari" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                    <svg aria-label="Bagikan Postingan" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    <div className="button-save">
                        <svg aria-label="Simpan" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    </div>
                </div>
                <div className="posting-likes">
                    {likes.toLocaleString()} likes
                </div>
                <div className="posting-comment">
                    <div className="comment-item">
                        <span className="comment-username" style={{marginRight:'5px'}}>
                            {username} 
                        </span>
                        {isVerified && <svg aria-label="Sudah Diverifikasi" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12" style={{marginRight:'7px',marginBottom:'-2px'}}><title>Sudah Diverifikasi</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>}
                        {caption}
                    </div>
                </div>
                {likes > 2 ?
                    <div className="posting-all-comment">
                        View all 4,890 comments
                    </div>
                    : null}
                <div className="posting-timepost">
                    {timePost}
                </div>
            </div>
        )
    }
}

export default Posting
