import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../dashboard/logo.jpg"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Router>
        <div className="container valign-wrapper" style={{ height: '75vh', flexDirection: 'column', display: 'flex' }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay" />
            <Link to="/dashboard" className="navbar-brand"> User Dashboard </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar nav ml-auto">
                <li className="nav-item">
                  <span className="nav-link navbar-text">{user.name}</span>
                </li>
                <li className="nav-item">
                  <button
                      style={{
                        width: "100px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                      }}
                      onClick={this.onLogoutClick}
                      className="btn waves-effect waves-light hoverable blue accent-3"
                  >
                  Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row" style={{ marginTop: '30vh' }}>
            <div className="landing-copy col s12 center-align">
              <h4><b>Hey there,</b> {user.name} 
                <p className="flow-text grey-text text-darken-1">
                  You are logged into your <span style={{ fontFamily: "monospace" }}> Dashboard </span> App...
                </p>
                <h5> Complete Dashboard with a personal Todo App Coming Soon ... </h5>
              </h4>
              <button style={{ width: "160px", borderRadius: '4px', letterSpacing: "1.5px", marginTop: "1rem" }} className="btn btn-large waves-effect waves-light hoverable blue accent-3" onClick={this.onLogoutClick}> Logout </button>
            </div>
          </div>
          <br/>
        </div>
      </Router>
      
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
