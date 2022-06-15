import React, { Component } from 'react'
import profile from '../assets/profile.jpg';

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: "",
            homeIcon: "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z",
            loveIcon: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
            findIcon: "M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z",
        };
    }

    iconLoveOnHover = () => {
        this.setState({
            loveIcon: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
        })
    }
    iconLoveOffHover = () => {
        this.setState({
            loveIcon: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
        })
    }
    iconFindOnHover = () => {
        this.setState({
            findIcon: "M47.6 44L35.8 32.2C38.4 28.9 40 24.6 40 20 40 9 31 0 20 0S0 9 0 20s9 20 20 20c4.6 0 8.9-1.6 12.2-4.2L44 47.6c.6.6 1.5.6 2.1 0l1.4-1.4c.6-.6.6-1.6.1-2.2zM20 35c-8.3 0-15-6.7-15-15S11.7 5 20 5s15 6.7 15 15-6.7 15-15 15z",
        })
    }
    iconFindOffHover = () => {
        this.setState({
            findIcon: "M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z",
        })
    }
    _handleChange = (e) => {
        this.setState({
            caption: e.target.value
        })
    }
    _handlePost = () => {
        const { caption } = this.state
        const { _handlePost,data } = this.props
        _handlePost({
            likes: 0,
            image: data.image,
            isImageSquare: data.isImageSquare,
            caption: caption,
            isDeleted:false
        })
    }

    render() {
        const { hideCard, data } = this.props
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-item" style={{ fontWeight: "bold" }}>
                        Buat Postingan Baru
                    </div>
                    <div className="post-item" style={{ cursor: "pointer" }} onClick={() => hideCard()}>
                        <svg aria-label="Tutup" color="#000000" fill="#000000" height="18" role="img" viewBox="0 0 48 48" width="18"><title>Tutup</title><path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg>
                    </div>
                </div>

                <div className={data.isImageSquare ? "posting-content square" : "posting-content"} onClick={this.handleDoubleClickPhone} onDoubleClick={this.onDoubleClick} style={{ width: "auto" }}>
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
                    <img src={data.image} alt="content" />
                </div>

                <div className="posting-comment">
                    <div className="comment-item">
                        <span className="comment-username d-flex vertical-align-center">
                            <div className="profile-icon-md borderless">
                                <img src={profile} alt="logo" style={{ width: "26px" }} />
                            </div>
                            <div style={{ marginLeft: "10px" }}> dimasputray</div>
                        </span>
                    </div>
                </div>
                <div className="posting-comment">
                    <textarea autoFocus={true} maxLength={250} className='input-comment' placeholder='Tulis keterangan...' onChange={(e) => { this._handleChange(e) }} />
                </div>
                <div className="post-footer">
                    <button className='btn-primary' onClick={() => this._handlePost()}>Bagikan</button>
                </div>
            </div>
        )
    }
}

export default Post
