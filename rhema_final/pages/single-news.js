import React from 'react';
import Layout from "../components/Layout";
import NewsSingle from "../components/NewsSingle";

const NewsSinglePage = () => {
    return (
        <Layout pageTitle="Single News">
            <NewsSingle />
        </Layout>
    );
};

export default NewsSinglePage;
