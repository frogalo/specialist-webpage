import React from 'react';
import styled from 'styled-components';
import {StyleSheetManager} from 'styled-components';

const HeroContainer = styled.section`
    margin-top: -80px;
    background: rgba(0, 0, 0, 0.65) url(${props => props.backgroundurl});
    background-blend-mode: darken;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    height: 370px;
    padding-top: 180px;
`;

const HeroTitle = styled.h1`
    font-size: 2.8em;
    margin-bottom: -10px;
    font-weight: bold;
    letter-spacing: 2px;
`;

const HeroSubtitle = styled.p`
    font-size: 1em;
    margin-bottom: -20px;
`;

const HeroButton = styled.button`
    background-color: #fff;
    color: #000;
    border: none;
    padding: 20px 30px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 60px;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const UnderHeaderSection = ({title, subtitle, buttonLabel, backgroundUrl}) => {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'backgroundurl'}>
            <HeroContainer backgroundurl={backgroundUrl}>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
                <HeroTitle>{title}</HeroTitle>
                <HeroButton>{buttonLabel}</HeroButton>
            </HeroContainer>
        </StyleSheetManager>

    );
};

export default UnderHeaderSection;
