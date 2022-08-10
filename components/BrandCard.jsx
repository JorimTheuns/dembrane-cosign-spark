import Link from "next/link";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { isMobile } from "react-device-detect";

/*USE FOR TESTS*/
/*import * as rdd from "react-device-detect";
rdd.isMobile = true;*/

export default function BrandCard({
  children,
  href,
  locale,
  type,
  bawLink,
  colorLink,
  title,
  subtitle,
  tagLine,
}) {
  const [activeCard, setActiveCard] = useState(false);
  return (
    <Link overlay type="button" href={href} locale={locale}>
      <div className="flex flex-col items-center gap-4 max-w-[15rem] max-h-screen">
        <h1
          className={`text-4xl font-bold transition-all duration-1000 ease-in-out" + ${
            activeCard
              ? "translate-y-0 opacity-100"
              : "translate-y-[10px] opacity-0"
          }`}
        >
          {title}
        </h1>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isMobile) {
              setActiveCard(isVisible);
            }
          }}
        >
          <div
            onMouseEnter={() => {
              if (!isMobile) {
                setActiveCard(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setActiveCard(false);
              }
            }}
            className=""
          >
            <div className="active:scale-90 hover:scale-95 transition-all duration-150 ease-in-out cursor-pointer relative max-h-[50vh]">
              <div className="">
                <img
                  src={bawLink}
                  className={`max-h-[40vh] transition-all duration-500 ease-in-out " + ${
                    activeCard ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <div className=" top-0 left-0 absolute">
                <img
                  src={colorLink}
                  className={`max-h-[40vh] transition-all duration-500 ease-in-out " + ${
                    activeCard ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </VisibilitySensor>
        <div
          className={`max-w-[250px] text-center transition-all duration-1000 ease-in-out" + ${
            activeCard
              ? "translate-y-0 opacity-100"
              : "translate-y-[-10px] opacity-0"
          }`}
        >
          <h1 className="text-2xl font-bold">{subtitle}</h1>
          <p className="text-lg">{tagLine}</p>
        </div>
      </div>
    </Link>
  );
}
