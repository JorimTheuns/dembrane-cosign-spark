import { LanguageToggleFlag } from "./LanguageToggle";
import { useRouter } from "next/router";

export default function Header({ title }) {
  const { locale, locales, asPath } = useRouter();
  return (
    <div className="fixed top-0 left-0 p-2 w-screen border-b-4 border-blackish">
      <div className="flex">
        <div className="flex grow"></div>
        <LanguageToggleFlag
          locales={locales}
          asPath={asPath}
        ></LanguageToggleFlag>
      </div>
    </div>
  );
}
