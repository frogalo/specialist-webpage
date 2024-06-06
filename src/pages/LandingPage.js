import React, {useEffect, useState} from 'react';
import UnderHeaderSection from '../components/UnderHeaderSection';
import FeaturesSection from '../components/landing-page-comp/FeaturesSection';
import ExpertsSection from '../components/landing-page-comp/ExpertsSection';
import CompaniesSection from "../components/landing-page-comp/CompaniesSection";
import CategoriesSection from "../components/landing-page-comp/CategoriesSection";
import Api from "../components/landing-page-comp/api";

const LandingPage = () => {
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.getUnderHeaderSection(1);
                const {title, subtitle, buttonLabel, backgroundImage} = response;
                const backgroundUrl = `http://localhost:1337` + backgroundImage.data.attributes.url;
                setHeaderData({title, subtitle, buttonLabel, backgroundUrl});
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!headerData) return <p>Loading...</p>;

    return (
        <>
            <UnderHeaderSection
                title={headerData.title}
                subtitle={headerData.subtitle}
                buttonLabel={headerData.buttonLabel}
                backgroundUrl={headerData.backgroundUrl}
            />
            <CompaniesSection/>
            <FeaturesSection/>
            <CategoriesSection/>
            <ExpertsSection/>
        </>
    );
};

export default LandingPage;
