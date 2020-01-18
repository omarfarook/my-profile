import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { GoFile } from 'react-icons/go';
import { MdPermContactCalendar } from 'react-icons/md';
import './style.scss';

class MobileNav extends Component {

    componentWillMount = () => document.addEventListener('mousedown', this.handleClick, false);

    // componentWillUnmount = () => document.removeEventListener('click', this.handleClick, false);

    openNav = () => document.getElementById("mySidenav").style.width = "75px";
    handleClick = (e) => {
        console.log(e.target)
        console.log(this.node)
        if(this.node.contains(e.target)) {
            return
        }
        this.closeNav();
    }
    closeNav = () => document.getElementById("mySidenav").style.width = "0";


    render() {
        return (
            <Fragment>
                <div id="mySidenav" className="sidenav" ref={node => this.node = node}>
                    <button className="closebtn" onClick={this.closeNav}>&times;</button>
                    <ul>
                        <li onClick={this.closeNav}><Link to={'/'}><FaHome size={30} /></Link></li>
                        <li onClick={this.closeNav}><Link to={'/mycv'}><GoFile size={30} /></Link></li>
                        <li onClick={this.closeNav}><Link to={'/contactme'}><MdPermContactCalendar size={30} /></Link></li>
                    </ul>
                </div>
                <span className="hamburger" onClick={this.openNav}>&#9776;</span>
            </Fragment>
        )
    }
}

export default MobileNav