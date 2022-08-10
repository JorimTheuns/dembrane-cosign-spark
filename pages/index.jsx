import Head from "next/head";
import Link from "next/link";
import MyLink from "@components/MyLink";
import languages from "../assets/languages.json";
import { getSiblingValue } from "./_app";
import { useRouter } from "next/router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import LanguageToggle from "@components/LanguageToggle";
import { LanguageToggleFlag } from "@components/LanguageToggle";

import CenterButtons from "@components/CenterButtons";
import FullScreenUI from "@components/FullScreenUI";
import Button from "@components/Button";

export default function Home() {
  const { locale, locales, asPath } = useRouter();

  function SelectLanguage() {
    if (locale == "nl-NL") {
      return <p>Selecteer uw taal</p>;
    } else {
      return <p>Please select your language</p>;
    }
  }

  function WelcomeText() {
    if (locale == "nl-NL") {
      return <p>Hier heb je wat nederlandse text.</p>;
    } else {
      return <p>Here is some english text.</p>;
    }
  }

  return (
    <div className="">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <FullScreenUI>
          <SelectLanguage></SelectLanguage>
          <div className="flex flex-col flex-wrap justify-center content-center gap-2">
            <LanguageToggle
              click={"triptitch"}
              locales={locales}
              asPath={asPath}
            ></LanguageToggle>
          </div>
          <WelcomeText></WelcomeText>
        </FullScreenUI>
      </main>
    </div>
  );
}
