import React, { Component } from 'react'
import profile from '../assets/profile.jpg';
import djp from '../assets/profile/djp.jpg';
import sekjen from '../assets/profile/sekjen.jpg';
import pusintek from '../assets/profile/pusintek.jpg';
import beacukairi from '../assets/profile/beacukairi.jpg';
import kemensosri from '../assets/profile/kemensosri.jpg';
import kemenkeuri from '../assets/profile/kemenkeuri.jpg';
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
                    <StoriesItem image={pusintek} username={"pusintek"}/>
                    <StoriesItem image={kemenkeuri} username={"kemenkeuri"}/>
                    <StoriesItem image={sekjen} username={"sekjen"}/>
                    <StoriesItem image={djp} username={"ditjenpajakri"}/>
                    <StoriesItem image={kemensosri} username={"kemensosri"}/>
                    <StoriesItem image={beacukairi} username={"beacukairi"}/>
                    <StoriesItem/>
                    <StoriesItem/>
                </ul>
            </div>
        )
    }
}

export default Stories
