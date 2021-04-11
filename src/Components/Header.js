import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    padding: 16px;
    font-size: 16px;
    justify-content: space-between;
    a {
        color: rgb(27, 27, 27);
        text-decoration: none;
        padding-left: 32px;
        padding-top:6px;
    }
    .links {
        padding-top: 8px;
        font-weight: 600;
    }
    .title {
        font-size: 30px;
    }    
`
const navItems = ['HOME', 'BLOG', 'CONTACTS']

const Header = () => {
    const [selectedNavItem, setSelectNavItem] = useState("HOME");

    return(
        <Container>
            <div className="title">
                Tamilpreneur
            </div>
            {/* {
                navItems.forEach(item => {
                    return(
                        <div key={item} >{item}</div>
                    )
                })
            } */}
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/contacts">CONTACTS</Link>
            </div>

        </Container>
    )
}

export default Header;