import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from '../actions/'

const link = {
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'black',
    background: 'lightblue',
}

const disabledLink = {
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'black',
    background: 'grey'
}

const NavBar = (props) => 
    <div className='NavBar'>
        <a href='/'><img className='navbar-brand' src={`${process.env.PUBLIC_URL}/assets/images/eduLAIN.png`} alt='eduLAIN Logo'/></a>
        <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        style={link}
        activeStyle={{
            background: 'darkblue',
            color: 'white'
        }}
        >Home</NavLink>
        <NavLink
        to="/mission"
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
        >Mission</NavLink>
        <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
        >About</NavLink>
        <NavLink
        to="/services"
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
        >Services</NavLink>
        <NavLink
        to="/contact"
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
        >Contact Us</NavLink>
        {
            props.auth ?  // if User is logged in
            <React.Fragment>
                <NavLink
                to='/dashboard'
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Dashboard</NavLink>
                <NavLink
                to="/"
                exact
                style={link}
                onClick={props.logoutUser}
                >Log Out</NavLink>
            </React.Fragment>
            :
            <React.Fragment>
                <NavLink
                to='/dashboard'
                exact
                style={disabledLink}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Dashboard</NavLink>
                <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Log In</NavLink>
            </React.Fragment>
        }
    </div>;

export default connect(state => ({ auth: state.auth }), { logoutUser })(NavBar)