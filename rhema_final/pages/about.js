import React from 'react';
import Layout from "../components/Layout";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import TeamArea from "../components/TeamArea";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <AboutArea />
            <MixerAreaTwo />
            <TeamArea />
            <FaqArea />
            <ServiceArea />
            <ClientsLogoTwo />
        </Layout>
    );
};

export default AboutPage;
