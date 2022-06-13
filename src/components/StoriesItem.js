import React, { Component } from 'react'
import profile from '../assets/profile.jpg';

export class StoriesItem extends Component {
    render() {
        return (
            <li className="has-stories">
                <div className="stories-item">
                    <div className="gambar">
                        <img src={profile} alt="profile" />
                    </div>
                </div>
                <span className="user">Dimas</span>
            </li>
        )
    }
}

export default StoriesItem
