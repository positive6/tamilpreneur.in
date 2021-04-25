import { Container } from './Styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <Container>
            <div className="title">
                TAMILPRENEUR
            </div>
            <div className="links">
                <NavLink to="/" exact={true} activeClassName="is-active" activeStyle={{color:"blue"}}>HOME</NavLink>
                <NavLink to="/blog" activeClassName="is-active" activeStyle={{color:"blue"}}>BLOG</NavLink>
                <NavLink to="/podcast" activeClassName="is-active" activeStyle={{color:"blue"}}>PODCAST</NavLink>
                <NavLink to="/contacts" activeClassName="is-active" activeStyle={{color:"blue"}}>CONTACTS</NavLink>
            </div>
        </Container>
    )
}

export default Header;