import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneIphone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './style.scss'
import dp from '../../1373.jpg';

class NavBar extends Component {
    render() {
        return (
            <aside className="nav-container">
                <section className="pro_pic">
                    <img src={dp} alt="pro_pic" />
                </section>
                <section className="name_role">
                    <span className="name">Mohamed Omar Farook</span>
                    <span className="role">Front End Developer</span>
                </section>
                <ul>
                    <li><Link to={'/'}>Home<span><IoIosArrowForward size={15} /></span></Link></li>
                    <li><Link to={'/mycv'}>myCV<span><IoIosArrowForward size={15} /></span></Link></li>
                    <li><Link to={'/contactme'}>ContactMe<span><IoIosArrowForward size={15} /></span></Link></li>
                </ul>
                <section className="get-in-touch">
                    <span>GET IN TOUCH</span>
                    <ul>
                        <li><a href="mailto:mohamedomarfarookvm@gmail.com"><IoIosMail size={20} /></a></li>
                        <li><a href="tel:+91 7824001944"><MdPhoneIphone size={20} /></a></li>
                        <li><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a></li>
                        <li><a href="https://github.com/omarfarook" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}

export default NavBar