import Head from "next/head";
import Link from "next/link";
import MyLink from "@components/MyLink";
import languages from "../assets/languages.json";
import { getSiblingValue } from "./_app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
    const timer = setTimeout(() => ticking && setCount((count + 1) % 3), 1.3e3);
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
  };
  const titles = 0;

  return (
    <div className="">
      <Head>
        <title>Dembrane, Cosign, Spark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <FullScreenUI>
          <div className="flex flex-wrap gap-8 content-center justify-center items-center">
            <img
              src="/svg/new-logos_DCS-logo.svg"
              className=" max-w-[15rem]"
            ></img>
            <div className="flex flex-col  justify-center  gap-2">
              <div className="text-6xl font-bold relative py-2">
                <h1
                  className={`transition-all duration-500 ease-in-out " + ${
                    count == 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Dembrane
                </h1>
                <h1
                  className={`absolute top-0 transition-all duration-500 ease-in-out" + ${
                    count == 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Cosign
                </h1>
                <h1
                  className={`absolute top-0 transition-all duration-500 ease-in-out" + ${
                    count == 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Spark
                </h1>
              </div>
              {/*<p>{content.welcome[locale]}</p>*/}
              <div className="flex flex-col flex-wrap justify-center content-center gap-2">
                <LanguageToggle
                  click={"triptitch"}
                  locales={locales}
                  asPath={asPath}
                ></LanguageToggle>
              </div>
              <p>{content.select[locale]}</p>
            </div>
          </div>
        </FullScreenUI>
      </main>
    </div>
  );
}
