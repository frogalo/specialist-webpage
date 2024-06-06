import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 200px;
`;

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <p>Get $10 off your first session & access to exclusive events</p>
                <Input type="email" placeholder="Enter your email" />
                <Button>Submit</Button>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
