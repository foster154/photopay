import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Universals from './universal_styles';

class Header extends Component {
  
  renderLinks() {
    
    const s = {
      navItem: {
        color: Universals.accentColor,
        textDecoration: 'none',
        marginRight: '50px',
        fontWeight: '400',
      }
    }
    
    if (this.props.authenticated) {
      // Currently logged in
      return [
        <li key={1}>
          <Link to="/" style={s.navItem}>Dashboard</Link>
        </li>,
        <li key={2}>
          <Link to="/invoices" style={s.navItem}>Invoices</Link>
        </li>,
        <li key={3}>
          <Link to="/signout" style={s.navItem}>Sign Out</Link>
        </li>
      ];
    } else {
      // sign in or sign up
      return [
        <li key={1}>
          <Link to="/signin" style={s.navItem}>Sign In</Link>
        </li>,
        <li key={2}>
          <Link to="/signup" style={s.navItem}>Sign Up</Link>
        </li>
      ];
    }
  }
  
  render() {
    
    const s = {
      nav: {
        height: '80px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.45)',
      },
      ul: {
        margin: '0',
        width: '100%',
        //maxWidth: '1200px',
        height: '80px',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
      },
      logoLi: {
        flex: '1',
      },
      logoText: {
        textDecoration: 'none',
        color: Universals.accentColor,
        fontSize: '32px',
        fontWeight: '600',
      }
    }
    
    return (
      <nav style={s.nav}>
        
        <ul style={s.ul}>
          <li style={s.logoLi}>
            <Link to="/" style={s.logoText}>Photo Invoice</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  };
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);