import React, {Component} from 'react';
import { FaLinkedin} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import './style.scss';

class Home extends Component {
    render() {
        return (
            <section className="body-content">
                <div className="home-container">
                    <div>MOF</div>
                    <span className="name">Mohamed Omar Farook</span>
                    <span className="role">Front End Developer</span>
                    <ul className="home_links">
                        <li><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
                        <li><a href="mailto:mohamedomarfarookvm@gmail.com"><IoIosMail size={30} /></a></li>
                        <li><a href="tel:+91 7824001944"><MdPhoneIphone size={30} /></a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Home