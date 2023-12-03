import React, { Component } from 'react'
import profile from '../assets/profile.jpg';
import pusdiklat from '../assets/profile/pusdiklat.jpg';
import lkpp from '../assets/profile/lkpp.jpg';
import inspektorat from '../assets/profile/inspektorat.jpg';
import hukum from '../assets/profile/hukum.jpg';
import eproc from '../assets/profile/eproc.jpg';
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
                    <StoriesItem image={lkpp} username={"lkpp_ri"}/>
                    <StoriesItem image={eproc} username={"eproc.lkpp"}/>
                    <StoriesItem image={pusdiklat} username={"puslatsdmpbj_lkpp"}/>
                    <StoriesItem image={inspektorat} username={"inspektorat_lkpp"}/>
                    <StoriesItem image={hukum} username={"bhosdm_lkpp"}/>
                    <StoriesItem image={kemenkeuri} username={"kemenkeuri"}/>
                    <StoriesItem image={kemensosri} username={"kemensosri"}/>
                    <StoriesItem/>
                    <StoriesItem/>
                </ul>
            </div>
        )
    }
}

export default Stories
