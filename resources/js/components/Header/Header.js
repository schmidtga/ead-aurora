import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
class Header extends Component {
    // 1.1
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
        };
        this.logOut = this.logOut.bind(this);
    }
    // 1.2
    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/login');
    }
    // 1.3
    render() {
        const aStyle = {
            cursor: 'pointer'
        };
    
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link to="/" class="nav-brand">Educacao gov.SP</Link>
                <div class="container">
                    <ul class="navbar-nav">
                        <li>
                            <Link to="/efi" class="nav-link" >Ensino Fundamental I</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(Header)