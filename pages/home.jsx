import Head from "next/head";
import Link from "next/link";
import MyLink from "@components/MyLink";
import languages from "../assets/languages.json";
import { getSiblingValue } from "./_app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState, useEffect } from "react";
import BrandCard from "@components/BrandCard";

import Header from "@components/Header";
import Footer from "@components/Footer";
import LanguageToggle from "@components/LanguageToggle";
import { LanguageToggleFlag } from "@components/LanguageToggle";

import CenterButtons from "@components/CenterButtons";
import FullScreenUI from "@components/FullScreenUI";
import Button from "@components/Button";

export default function Home() {
  const { locale, locales, asPath } = useRouter();
  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount((count + 1) % 2), 2e3);
    return () => clearTimeout(timer);
  }, [count, ticking]);

  const content = {
    select: {
      "nl-NL": "Selecteer uw taal",
      "en-UK": "Please select your language",
    },
    welcome: {
      "nl-NL": "Welkom",
      "en-UK": "Welcome",
    },
    brands: [
      {
        title: "Dembrane",
        "nl-NL": {
          subtitle: "Onze visie:",
          tagline: "Bouwen aan de Toekomst van Democratie",
        },
        "en-UK": {
          subtitle: "Dream",
          tagline:
            "The tech startup building the tools we need to scale globally.",
        },
      },
      {
        title: "Cosign",
        "nl-NL": {
          subtitle: "Onze methode:",
          tagline: "Samen zijn wij Superslim",
        },
        "en-UK": {
          subtitle: "Think",
          tagline:
            "The workshop methodology that turns any crowd into a superintelligent problem solver.",
        },
      },
      {
        title: "Spark",
        "nl-NL": {
          subtitle: "Onze missie:",
          tagline: "Lokaal Impact Creëren",
        },
        "en-UK": {
          subtitle: "Act",
          tagline:
            "The non-profit initiative empowering communitites to make change work for them.",
        },
      },
    ],
    cards: [
      {
        title: "Dembrane",
        "nl-NL": {
          subtitle: "Onze visie:",
          tagline: "Bouwen aan de Toekomst van Democratie",
        },
        "en-UK": {
          subtitle: "Dream",
          tagline: "Learn about our Activism",
        },
      },
      {
        title: "Cosign",
        "nl-NL": {
          subtitle: "Onze methode:",
          tagline: "Samen zijn wij Superslim",
        },
        "en-UK": {
          subtitle: "Think",
          tagline: "Learn more about our Workshops",
        },
      },
      {
        title: "Spark",
        "nl-NL": {
          subtitle: "Onze missie:",
          tagline: "Lokaal Impact Creëren",
        },
        "en-UK": {
          subtitle: "Act",
          tagline: "Learn more about our future plans",
        },
      },
    ],
  };
  const titles = 0;

  return (
    <div className="">
      <Head>
        <title>Dembrane, Cosign, Spark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white max-w-6xl mx-auto">
        <div
          id="hero"
          className="min-h-screen grid grid-cols-3 grid-rows-2 gap-8 p-8 place-content-center"
        >
          <div className="col-span-3 place-self-center sm:col-span-2 md:row-span-3 md:col-span-1">
            <img src="/svg/new-logos_DCS-logo.svg" className=""></img>
          </div>
          <div className="self-start md:self-center col-span-3 row-span-1 md:row-span-3 md:col-span-2 xs:col-start-2">
            <h1 className="text-6xl font-bold pb-8">
              Dream, Think, Act. Together
            </h1>
            <Button
              dataTallyOpen="w5BVvo"
              dataTallyLayout="modal"
              dataTallyWidth="600"
              dataTallyOverlay="1"
              dataTallyEmojiText="🤙"
              dataTallyEmojiAnimation="heart-beat"
              className=""
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div
          id="two"
          className="min-h-screen auto-rows-min md:max-h-screen grid p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-12 place-content-center"
        >
          <h1 className="col-span-full text-5xl pb-8 self-end ">
            <span className="font-bold">All at Once</span> is a collective of
            initiatives that combine to make something stronger than their
            parts.
          </h1>
          <BrandCard
            className="row-span-2"
            href="/"
            title={content.brands[0].title}
            subtitle={content.brands[0][locale].subtitle}
            tagLine={content.brands[0][locale].tagline}
            bawLink="/svg/new-logos_Dembrane-logo-black.svg"
            colorLink="/svg/new-logos_Dembrane-logo.svg"
          ></BrandCard>
          <BrandCard
            className="row-span-2"
            href="/"
            bawLink="/svg/new-logos_Cosign-logo-black.svg"
            colorLink="/svg/new-logos_Cosign-logo.svg"
            title={content.brands[1].title}
            subtitle={content.brands[1][locale].subtitle}
            tagLine={content.brands[1][locale].tagline}
          ></BrandCard>
          <BrandCard
            className="row-span-2"
            href="/"
            bawLink="/svg/new-logos_Spark-logo-black.svg"
            colorLink="/svg/new-logos_Spark-logo.svg"
            title={content.brands[2].title}
            subtitle={content.brands[2][locale].subtitle}
            tagLine={content.brands[2][locale].tagline}
          ></BrandCard>
        </div>
        <div
          id="three"
          className="min-h-screen p-8 max-h-screen grid grid-rows-6 grid-cols-6 gap-8"
        >
          <div className="row-span-2 row-start-1 col-span-full sm:col-span-4 text-4xl font-bold self-end">
            <h1 className="pb-4">Long term vision</h1>
            <h1 className="pb-4">Brought down to earth</h1>
            <h1 className="pb-4">Making impact in communities</h1>
          </div>
          <div className="col-span-2 row-span-2 row-start-5 sm:row-start-4">
            <BrandCard
              href="/"
              title={content.cards[0].title}
              subtitle={content.cards[0][locale].subtitle}
              tagLine={content.cards[0][locale].tagline}
              bawLink="/svg/new-logos_Dembrane-logo-black.svg"
              colorLink="/svg/new-logos_Dembrane-logo.svg"
            ></BrandCard>
          </div>

          <div className="col-span-2 row-span-2 row-start-4 sm:row-start-3">
            <BrandCard
              href="/"
              bawLink="/svg/new-logos_Cosign-logo-black.svg"
              colorLink="/svg/new-logos_Cosign-logo.svg"
              title={content.cards[1].title}
              subtitle={content.cards[1][locale].subtitle}
              tagLine={content.cards[1][locale].tagline}
            ></BrandCard>
          </div>
          <div className="col-span-2 row-span-2 row-start-3 sm:row-start-2 col-end-7">
            <BrandCard
              href="/"
              bawLink="/svg/new-logos_Spark-logo-black.svg"
              colorLink="/svg/new-logos_Spark-logo.svg"
              title={content.cards[2].title}
              subtitle={content.cards[2][locale].subtitle}
              tagLine={content.cards[2][locale].tagline}
            ></BrandCard>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
