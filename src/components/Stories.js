import React, { Component } from 'react'
import profile from '../assets/profile.jpg';
import StoriesItem from '../components/StoriesItem';

export class Stories extends Component {
    render() {
        return (
            <div className="stories">
                <ul>
                    <li>
                        <div className="stories-item">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="my-stories">
                        </div>
                        <span className="user">Dimas</span>
                    </li>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                    <StoriesItem/>
                </ul>
            </div>
        )
    }
}

export default Stories
