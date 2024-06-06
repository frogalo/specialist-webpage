import React from 'react';
import styled from 'styled-components';

const ExpertsContainer = styled.section`
    text-align: center;
`;

const ExpertsTitle = styled.h2`
    margin-bottom: 20px;
    text-align: left;
    margin-left: 20%;
`;

const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    margin-left: 20%;
    gap: 10px;

`;


const Slide = styled.div`
    flex: 0 0 auto;
    width: 240px;
    margin-right: 20px;
`;

const ExpertImage = styled.img`
    height: 360px;
    width: 250px;
    border-radius: 8px;
    object-fit: cover;

`;

const ExpertName = styled.h4`
    margin: 0 4px;
`;

const ExpertRate = styled.div`
`;

const ExpertPrice = styled.div`
    text-align: left;
`;

const ExpertDescription = styled.p`
    width: 85%;
    text-align: left;
`;

const NameAndRate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ExpertsSection = () => {

    return (
        <ExpertsContainer>
            <ExpertsTitle>Top Experts. Access to the best has never been easier</ExpertsTitle>
            <CarouselWrapper>
                    {expertData.map((expert, index) => (
                        <Slide key={index}>
                            <ExpertImage src="https://media.intro.co/avatars/434693CtGEZ_n3.jpg" alt={expert.name} />
                            <NameAndRate>
                                <ExpertName>{expert.name}</ExpertName>
                                <ExpertRate>{expert.rate}</ExpertRate>
                            </NameAndRate>
                            <ExpertPrice>{expert.price}</ExpertPrice>
                            <ExpertDescription>{expert.description}</ExpertDescription>
                        </Slide>
                    ))}
            </CarouselWrapper>
        </ExpertsContainer>
    );
};

export default ExpertsSection;

const expertData = [
    {
        name: 'John Doe',
        rate: '★★★★★',
        price: '$100/session',
        description: 'Founder of Drybar Sold for $225M, Guest :shark: Shark Tank, NYT Best Selling Author, President of Canopy'
    },
    {
        name: 'Jane Smith',
        rate: '★★★★☆',
        price: '$80/session',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'John Doe',
        rate: '★★★★★',
        price: '$100/session',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Jane Smith',
        rate: '★★★★☆',
        price: '$80/session',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'John Doe',
        rate: '★★★★★',
        price: '$100/session',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Jane Smith',
        rate: '★★★★☆',
        price: '$80/session',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];
