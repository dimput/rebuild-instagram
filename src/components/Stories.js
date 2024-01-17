import React, { Component } from 'react'
import profile from '../assets/profile.jpg'
import bpsdmpupr from '../assets/profile/bpsdmpupr.jpg'
import pupr from '../assets/profile/pupr.jpg'
import pfid from '../assets/profile/pfid.jpg'
import kemensosri from '../assets/profile/kemensosri.jpg'
import kemendagri from '../assets/profile/kemendagri.jpg'
import kemenkeuri from '../assets/profile/kemenkeuri.jpg'
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
                    <StoriesItem image={pupr} username={'kemenpupr'} />
                    <StoriesItem image={pfid} username={'pfid'} />
                    <StoriesItem image={kemenkeuri} username={'kemenkeuri'} />
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
