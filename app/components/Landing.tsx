"use client";

import Script from "next/script";
import { LANDING_HTML } from "../landing-html";

export default function Landing() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: LANDING_HTML }} />
      <Script src="/booking.js" strategy="afterInteractive" />
    </>
  );
}
