import type { NextPage } from "next";
import React from 'react';
import Head from "next/head";
import Form from "../components/Monarch/Form";
import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Monarch</title>
                <meta name="description" content="Monarch" />
            </Head>

            <Container className="mt-12">
                <Form />
            </Container>
        </>
    );
};

export default Page;
