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
    const timer = setTimeout(() => ticking && setCount((count + 1) % 4), 2e3);
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
          <div className="flex flex-col flex-wrap gap-8 content-center justify-center items-center text-center">
            <div className="relative">
              <img
                src="/svg/new-logos_Dembrane-logo.svg"
                className={`max-w-[15rem] transition-all duration-500 ease-in-out " + ${
                  count == 0 ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              ></img>
              <img
                src="/svg/new-logos_Cosign-logo.svg"
                className={`max-w-[15rem] absolute top-0 transition-all duration-500 ease-in-out " + ${
                  count == 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-1rem]"
                }`}
              ></img>
              <img
                src="/svg/new-logos_Spark-logo.svg"
                className={`max-w-[15rem] absolute top-0 transition-all duration-500 ease-in-out" + ${
                  count == 2 ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              ></img>
              <img
                src="/svg/new-logos_DCS-logo.svg"
                className={`max-w-[15rem] absolute top-0 transition-all duration-500 ease-in-out" + ${
                  count == 3 ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              ></img>
            </div>

            <div className="flex flex-col  justify-center  gap-2">
              <div className="text-6xl font-bold relative my-2">
                <h1
                  className={`relative transition-all left-1/2 translate-x-[-50%] duration-500 ease-in-out w-full" + ${
                    count == 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Dembrane
                </h1>
                <h1
                  className={`absolute top-0 left-1/2 translate-x-[-50%] w-full transition-all duration-500 ease-in-out" + ${
                    count == 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Cosign
                </h1>
                <h1
                  className={`absolute top-0 left-1/2 translate-x-[-50%] w-full transition-all duration-500 ease-in-out" + ${
                    count == 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  Spark
                </h1>
                <h1
                  className={`absolute top-0 left-1/2 translate-x-[-50%] w-full transition-all duration-500 ease-in-out" + ${
                    count == 3
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[-20px]"
                  }`}
                >
                  All at once
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
