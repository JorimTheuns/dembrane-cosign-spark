import Link from "next/link";

export default function MyLink({ children, href, locale, type }) {
  var classes =
    "px-6 py-2.5 bg-white border-blackish border-4 text-blackish font-bold text-xl hover:bg-apple hover:scale-95 focus:ring-2 ring-apple active:scale-90 transition-all duration-150 ease-in-out cursor-pointer";
  if (type == "emoji") {
    classes =
      "px-2 py-0.5 bg-white border-blackish border-4 text-blackish font-bold text-2xl hover:bg-apple hover:scale-95 focus:ring-2 ring-apple active:scale-90 transition-all duration-150 ease-in-out cursor-pointer";
  }
  return (
    <Link overlay type="button" href={href} locale={locale}>
      <div className={classes}>{children}</div>
    </Link>
  );
}
