import React, {Component} from 'react';
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
                        <li>Lin</li>
                        <li>gmail</li>
                        <li>phone</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Home