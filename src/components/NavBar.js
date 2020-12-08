import { NavLink } from 'react-router-dom'

const link = {
    width: '100%',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'black',
}

const NavBar = () => 
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
        <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
        >Log In</NavLink>
    </div>;

export default NavBar