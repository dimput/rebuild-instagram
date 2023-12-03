import React, { Component } from 'react'
import profile from '../assets/profile.jpg';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeIcon: "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z",
            reelsIconStrokeWidth: "1",
            findIcon: "M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z",
        };
    }
    _handleImageChange(e) {
        const { handlePost, showCard } = this.props
        e.preventDefault();
        showCard()
        if (e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                var image = new Image()
                image.src = reader.result;
                image.onload = function () {
                    handlePost({
                        isImageSquare: image.width === image.height,
                        image: reader.result,
                        caption: "hello"
                    })
                };
            }

            reader.readAsDataURL(file)
        }
    }

    iconLoveOnHover = () => {
        this.setState({
            reelsIconStrokeWidth: "2"
        })
    }
    iconLoveOffHover = () => {
        this.setState({
            reelsIconStrokeWidth: "1"
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

    render() {
        return (
            <div className="footer">
                <div className="footer-item">
                    <svg
                        aria-label="Beranda"
                        className="footer-icon"
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24">
                        <path d={this.state.homeIcon}>
                        </path>
                    </svg>
                </div>
                <div className="footer-item">
                    <svg
                        onMouseEnter={this.iconFindOnHover}
                        onMouseLeave={this.iconFindOffHover}
                        aria-label="Cari &amp; Jelajahi"
                        className="footer-icon"
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24">
                        <path d={this.state.findIcon}></path>
                        <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
                    </svg>
                </div>
                <input type="file" name="file" id="fileToUpload" style={{ display: "none" }} accept="image/*"
                    onChange={(e) => this._handleImageChange(e)}
                />
                <div className="footer-item">
                    <label htmlFor="fileToUpload">
                        <svg aria-label="Postingan Baru" className="footer-icon" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"></path></svg>
                    </label>
                </div>
                <div className="footer-item">
                    <svg
                        onMouseEnter={this.iconLoveOnHover}
                        onMouseLeave={this.iconLoveOffHover}
                        aria-label="Reels"
                        fill="#262626"
                        height="24" 
                        viewBox="0 0 24 24" width="24">
                            <title>Reels</title>
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width={this.state.reelsIconStrokeWidth} x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={this.state.reelsIconStrokeWidth} x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={this.state.reelsIconStrokeWidth} x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                            <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={this.state.reelsIconStrokeWidth}></path>
                            <path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <div className="footer-item">
                    <div className="profile-icon">
                        <img src={profile} alt="logo" style={{ width: "18px" }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
