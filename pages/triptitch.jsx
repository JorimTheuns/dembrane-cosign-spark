import Head from "next/head";
import Link from "next/link";

import MyLink from "@components/MyLink";
import languages from "../assets/languages.json";
import { getSiblingValue } from "./_app";
import BrandCard from "@components/BrandCard";

import { useRouter } from "next/router";

import FullScreenUI from "@components/FullScreenUI";

export default function Triptitch() {
  const { locale, locales, asPath } = useRouter();
  const content = {
    brands: [
      {
        title: "Dembrane",
        "nl-NL": {
          subtitle: "Onze visie:",
          tagline: "Bouwen aan de Toekomst van Democratie",
        },
        "en-UK": {
          subtitle: "Our vision:",
          tagline: "Building the Future of Democracy",
        },
      },
      {
        title: "Cosign",
        "nl-NL": {
          subtitle: "Onze methode:",
          tagline: "Samen zijn wij Superslim",
        },
        "en-UK": {
          subtitle: "Our method:",
          tagline: "Collective Superintelligence",
        },
      },
      {
        title: "Spark",
        "nl-NL": {
          subtitle: "Onze missie:",
          tagline: "Lokaal Impact Creëren",
        },
        "en-UK": {
          subtitle: "Our mission:",
          tagline: "Make Impact in Communtities",
        },
      },
    ],
  };

  return (
    <div className="">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <FullScreenUI>
          <div className="flex flex-wrap justify-center content-center gap-8 m-8 max-w-screen-lg shrink-0">
            <BrandCard
              href="/"
              title={content.brands[0].title}
              subtitle={content.brands[0][locale].subtitle}
              tagLine={content.brands[0][locale].tagline}
              bawLink="/svg/new-logos_Dembrane-logo-black.svg"
              colorLink="/svg/new-logos_Dembrane-logo.svg"
            ></BrandCard>
            <BrandCard
              href="/"
              bawLink="/svg/new-logos_Cosign-logo-black.svg"
              colorLink="/svg/new-logos_Cosign-logo.svg"
              title={content.brands[1].title}
              subtitle={content.brands[1][locale].subtitle}
              tagLine={content.brands[1][locale].tagline}
            ></BrandCard>
            <BrandCard
              href="/"
              bawLink="/svg/new-logos_Spark-logo-black.svg"
              colorLink="/svg/new-logos_Spark-logo.svg"
              title={content.brands[2].title}
              subtitle={content.brands[2][locale].subtitle}
              tagLine={content.brands[2][locale].tagline}
            ></BrandCard>
          </div>
        </FullScreenUI>
      </main>
    </div>
  );
}
