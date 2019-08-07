import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <div className="page">
                <section className="nav-bar-container">
                    <div className="nav-left">
                        <a className="nav-icon" href="#/">
                            <img className="lightmeter" src="/assets/lightmeter.png" />
                            <div className="nav-link-logo">Fotobox</div>
                        </a>
                    </div>

                    <div className="nav-mid">
                        <input className="user-search" type="text" placeholder="Search Other Boxes" />
                    </div>

                    <div className="nav-right">
                        <img className="box-icon" src="/assets/fotobox_icon.png" />
                        <img className="post-form-icon" src="/assets/rolleiflex.jpg" />
                        <button className="logout" onClick={this.handleClick}>logout</button>
                    </div>
                </section>
            </div>
        )
    }
}


export default withRouter(NavBar);



// import React from "react";
// import GreetingContainer from "../sessions/greeting/GreetingContainer";
// import SearchBarContainer from "../search/SearchBarContainer";

// const navbar = () => (
//     <div className="toolbar">
//         <nav className="toolbar__navigation">
//             <div />
//             <div className="toolbar__logo">
//                 <a href="/">
//                     <img src={window.logo} className="logo" />
//                 </a>
//             </div>
//             <SearchBarContainer />
//             <div className="spacer" />
//             <div className="toolbar-navigation-items">
//                 <GreetingContainer />
//             </div>
//         </nav>
//     </div>
// );

// export default navbar;