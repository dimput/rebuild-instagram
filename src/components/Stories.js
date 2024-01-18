import React, { Component } from 'react'
import profile from '../assets/profile.jpg'
import bpsdmpupr from '../assets/profile/bpsdmpupr.jpg'
import somethinc from '../assets/profile/somethinc.jpg'
import beautyhaul from '../assets/profile/beauty_haul.jpg'
import kemensosri from '../assets/profile/kemensosri.jpg'
import kemendagri from '../assets/profile/kemendagri.jpg'
import somethinc_clinic from '../assets/profile/somethinc_clinic.jpg'
import bapenas from '../assets/profile/bapenas.jpg'
import StoriesItem from '../components/StoriesItem'

export class Stories extends Component {
    render() {
        return (
            <div className="stories">
                <ul>
                    <li>
                        <div className="stories-item">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="my-stories"></div>
                        <span className="user">Dimas</span>
                    </li>
                    <StoriesItem image={somethinc} username={'somethincofficial'} />
                    <StoriesItem image={beautyhaul} username={'beautyhaulofficial'} />
                    <StoriesItem image={somethinc_clinic} username={'somethinc_clinic'} />
                    <StoriesItem image={bapenas} username={'bapenas'} />
                    <StoriesItem image={kemendagri} username={'kemendagri'} />
                    <StoriesItem image={kemensosri} username={'kemensosri'} />
                    <StoriesItem image={bpsdmpupr} username={'pupr_bpsdm'} />
                </ul>
            </div>
        )
    }
}

export default Stories
