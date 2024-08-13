import React from 'react';
import Layout from "../components/Layout";
import NavTwo from "../components/NavBar";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import GiveArea from "../components/GiveArea";
import MakeWorldArea from "../components/MakeWorldArea";
import ClientsLogo from "../components/ClientsLogo";
import DonateArea from "../components/DonateArea";
import MixerAreaThree from "../components/MixerAreaThree";
import CausesArea from "../components/CausesArea";
import CategoryArea from "../components/CategoryArea";
import GalleryCarousel from "../components/GalleryCarousel";
import Pricing from "../components/Pricing";
import EventsHome from "../components/EventsHome";
import VolunteerArea from "../components/VolunteerArea";
import CallToActionThree from "../components/CallToActionThree";
import ServiceArea from "../components/ServiceArea";
import HelpingArea from "../components/HelpingArea";
import TeamArea from "../components/TeamArea";
import CallToAction from "../components/CallToAction";
import Map from "../components/Map";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Home">
            <SliderTwo />
            <GiveArea />
            <ServiceArea />
            <MakeWorldArea />
            <ClientsLogo />
            
            <MixerAreaThree />
            <CausesArea />
            <HelpingArea />
            <TeamArea />
            <CallToAction />

            <GalleryCarousel />
            <EventsHome />
            <VolunteerArea />
            <Map />
            <CallToActionThree />
        </Layout>
    );
};

export default HomePageTwo;
