import { getSiblingValue } from "pages/_app";
import languages from "../assets/languages.json";
import MyLink from "./MyLink";

export default function LanguageToggle({ locales, asPath, click }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {locales.map((l, i) => {
        const lang = getSiblingValue("locale", l, "text", languages.languages);
        const href = asPath.toString() + click.toString();
        return (
          <MyLink key={i} href={href} locale={l}>
            {lang}
          </MyLink>
        );
      })}
    </div>
  );
}

export function LanguageToggleFlag({ locales, asPath }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {locales.map((l, i) => {
        var flag = getSiblingValue("locale", l, "emoji", languages.languages);
        return (
          <MyLink key={i} href={asPath} locale={l} type="emoji">
            {flag}
          </MyLink>
        );
      })}
    </div>
  );
}
