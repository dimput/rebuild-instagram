import React, { Component } from 'react'
import profile from '../assets/profile.jpg';

export class StoriesItem extends Component {
    render() {
        const { image, username } = this.props
        return (
            <li className="has-stories">
                <div className="stories-item">
                    <div className="gambar">
                        <img src={image || profile} alt="profile" />
                    </div>
                </div>
                <span className="user">{username? (username.length>9?username.substring(0,9)+'..':username): "username"}</span>
            </li>
        )
    }
}

export default StoriesItem
