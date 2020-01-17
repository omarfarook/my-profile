import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import dp from '../../1373.jpg';
class NavBar extends Component {
    render() {
        return (
            <aside className="nav-container">
                <div className="pro_pic">
                    <img src={dp} alt="pro_pic" />
                </div>
                <div className="name_role">
                    <span className="name">Mohamed Omar Farook</span>
                    <span className="role">Front End Developer</span>
                </div>
                <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/mycv'}>myCV</Link></li>
                <li><Link to={'/contactme'}>ContactMe</Link></li>
                </ul>
            </aside>
        )
    }
}

export default NavBar