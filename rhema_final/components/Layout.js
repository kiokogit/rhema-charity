import React from 'react';
import Head from 'next/head';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";


const Layout = (props) => {

    return (
        <div>
            <Head>
                <title>{'Rhema | ' + props.pageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <NavBar other_class={`${props?.pageTitle === 'Home'? "header-area2":""}`} />
            {props?.pageTitle && props?.pageTitle !== 'Home' && <PageHeader title={props.pageTitle} />}
            {props.children}
            <Footer />

            <script src="/plugins/accordion.min.js"></script>
            <script src="/plugins/glightbox.min.js"></script>

        </div>
    )
}
export default Layout;