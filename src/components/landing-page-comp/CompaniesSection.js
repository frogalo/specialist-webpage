import React from 'react';
import styled from 'styled-components';


const companyLogos = [
    {id: 1, src: require('../../assets/comp-logos/img.png'), alt: 'Company 1 Logo'},
    {id: 2, src: require('../../assets/comp-logos/img_1.png'), alt: 'Company 2 Logo'},
    {id: 3, src: require('../../assets/comp-logos/img_2.png'), alt: 'Company 3 Logo'},
    {id: 4, src: require('../../assets/comp-logos/img_3.png'), alt: 'Company 4 Logo'},
    {id: 5, src: require('../../assets/comp-logos/img_4.png'), alt: 'Company 5 Logo'},

];

// Styled components
const CompaniesWrapper = styled.div`
    background-color: #1f1f1f; 
    padding: 40px;
    display: flex;
    justify-content: center;
    gap: 30px
`;

const CompanyLogo = styled.img`
    height: 24px;
    margin-right: 20px;
    filter: grayscale(100%); 
`;

const CompaniesSection = () => {
    return (
        <CompaniesWrapper>
            {companyLogos.map(company => (
                <CompanyLogo key={company.id} src={company.src} alt={company.alt}/>
            ))}
        </CompaniesWrapper>
    );
};

export default CompaniesSection;
