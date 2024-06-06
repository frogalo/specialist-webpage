// src/components/Header.js

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    z-index: 99;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 320px;
    padding-right: 320px;
    color: white;
    padding-top: 8px;
`;

const Logo = styled.div`
    font-size: 2em;
    font-weight: bold;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
    font-size: 1em;
    align-items: center;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1em;
    &:hover {
        text-decoration: underline;
    }
`;

const GiftButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: white;
    color: black;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 1em;
    text-decoration: none;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <NavBar>
                <Logo>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Intro
                    </Link>
                </Logo>
                <NavLinks>
                    <GiftButton to="#">
                        <FontAwesomeIcon icon={faGift} />
                        Gift a Session
                    </GiftButton>
                    <NavLink to="/become-an-expert">Become an Expert</NavLink>
                    <NavLink to="#">Our Mission</NavLink>
                </NavLinks>
            </NavBar>
        </HeaderContainer>
    );
};

export default Header;
