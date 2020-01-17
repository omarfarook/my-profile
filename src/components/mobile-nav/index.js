import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class MobileNav extends Component {

    // static getDerivedStateFromProps = () => document.addEventListener('mousedown', this.handleClick, false);

    // componentWillUnmount = () => document.removeEventListener('click', this.handleClick, false);

    openNav = () => document.getElementById("mySidenav").style.width = "160px";
    // handleClick = (e) => {
    //     console.log(e.target)
    // }
    closeNav = () => document.getElementById("mySidenav").style.width = "0";


    render() {
        return (
            <Fragment>
                <div id="mySidenav" className="sidenav" ref={node => this.node = node}>
                    <button className="closebtn" onClick={this.closeNav}>&times;</button>
                    <ul>
                        <li onClick={this.closeNav}><Link to={'/'}>Home</Link></li>
                        <li onClick={this.closeNav}><Link to={'/mycv'}>myCV</Link></li>
                        <li onClick={this.closeNav}><Link to={'/contactme'}>Contact Me</Link></li>
                    </ul>
                </div>
                <span className="hamburger" onClick={this.openNav}>&#9776;</span>
            </Fragment>
        )
    }
}

export default MobileNav