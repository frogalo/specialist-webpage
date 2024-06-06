import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 80px;
    gap: 45px;
    background-color: #fcfaef;
`;

const Feature = styled.div`
    width: 18%;
    text-align: left;
`;

const FeaturesSection = () => {
    return (
        <FeaturesContainer>
            <Feature>
                <h2>Get access to the world’s best</h2>
                <p>Choose from our list of the top experts in a variety of topics</p>
            </Feature>
            <Feature>
                <h2>Personalized advice just for you</h2>
                <p>Book a 1-on-1 virtual session & get advice that is tailored to you</p>
            </Feature>
            <Feature>
                <h2>Save time and money, guaranteed</h2>
                <p>Our guarantee – find value in your first session or your money back</p>
            </Feature>
        </FeaturesContainer>
    );
};

export default FeaturesSection;
