import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';

export default function CaseStudyDetails() {
  return (
    <>
      <Head>
        <title>nizom/312</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Div className="bg-2">
          <Div className="container flex">
          <Spacing lg="140" md="80" />
          <Div className="flex">
          <h2 className="cs-font_38 text-center">Nizom 312 - 313</h2>
            <img
              src="/images/nizom312.PNG"
              alt="Thumb"
              className="cs-radius_15 rasm-nizom"
              />
          </Div>
              <a href="https://drive.google.com/file/d/1Pc1sGuf5ZPrWNH4FNtO2YyqxxXAo-ENL/view?usp=sharing">Ochib ko'rish</a>
          </Div> 
        </Div> 
      </Layout>
    </>
  );
}
