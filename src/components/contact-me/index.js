import React, { Component } from 'react';
import './style.scss'

class ContactMe extends Component {
    render() {
        return (
            <section className="contact-container">
                <h2>Contact Me</h2>
                <span>I am available to hire ...</span>
                <address>
                    <ul className="links">
                        <li><span>E-mail: </span><a href="mailto:mohamedomarfarookvm@gmail.com">md.omarfarook.v.m@gmail.com</a></li>
                        <li><span>Phone: </span><a href="tel:+91 7824001944">+91 7824001944</a></li>
                        <li><span>LinkedIn: </span><a href="https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/" target="_blank" rel="noopener noreferrer">omarfarook.linkedin</a></li>
                        <li><span>Github:</span><a href="https://github.com/omarfarook" target="_blank" rel="noopener noreferrer">omarfarook.github</a></li>
                    </ul>
                </address>
            </section>
        )
    }
}

export default ContactMe