import styled from 'styled-components';
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    padding: 16px;
    font-size: 16px;
    justify-content: space-between;
    a {
        text-decoration: none;
        padding-left: 32px;
        padding-top:6px;
        color:rgb(27, 27, 27);
    }
    a:hover{
        color: #ed5863;
    }
    
    .links {
        padding-top: 8px;
        font-weight: 600;
        color:#ed5863;
    }
    .title {
        font-size: 30px;
        font-weight: 600;
        font-family: BEBAS NEUE;
        color:#ed5863;
    }   
`
const navItems = ['HOME', 'BLOG', 'CONTACTS']

const Header = () => {
    const [selectedNavItem, setSelectNavItem] = useState("HOME");

    return(
        <Container>
            <div className="title">
                TAMILPRENEUR
            </div>
            <div className="links">
                <NavLink to="/" activeClassName="is-active">HOME</NavLink>
                <NavLink to="/blog" activeClassName="is-active" activeStyle={{color:"blue"}}>BLOG</NavLink>
                <NavLink to="/podcast" activeClassName="is-active" activeStyle={{color:"blue"}}>PODCAST</NavLink>
                <NavLink to="/contacts" activeClassName="is-active" activeStyle={{color:"blue"}}>CONTACT US</NavLink>
            </div>
        </Container>
    )
}

export default Header;