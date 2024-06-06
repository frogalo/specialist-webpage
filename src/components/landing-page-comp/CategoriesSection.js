// src/components/CategoriesSection.js

import React from 'react';
import styled from 'styled-components';

// Sample category data (replace with actual data)
const categories = [
    {
        id: 1,
        name: 'Top Experts',
        image: 'img.png',
    },
    {
        id: 2,
        name: 'Home',
        image: 'img_1.png',
    },
    {
        id: 3,
        name: 'Career & Business',
        image: 'img_2.png',
    },
    {
        id: 4,
        name: 'Style & Beauty',
        image: 'img_3.png',
    },
    {
        id: 5,
        name: 'Wellness',
        image: 'img_4.png',
    },
    {
        id: 6,
        name: 'Astrology & more',
        image: 'img_5.png',
    }
];

// Styled components
const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-left: 20%;
    padding-top: 50px;
`;

const CategoryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items to center */
    width: 200px;
    margin-bottom: 20px;
    justify-content: center;
`;

const CategoryImage = styled.img`
    width: 148px;
    height: 60px;
    border-radius: 40px;
`;


const CategoryDescription = styled.p`
    text-align: center;
    margin-top: 10px;
`;

const CategoriesSection = () => {
    return (
        <CategoriesContainer>
            {categories.map(category => (
                <CategoryCard key={category.id}>
                    <CategoryImage src="https://picsum.photos/300/200" alt={category.name} />
                    <CategoryDescription>{category.name}</CategoryDescription>
                </CategoryCard>
            ))}
        </CategoriesContainer>
    );
};

export default CategoriesSection;
