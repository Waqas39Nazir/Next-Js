// "use client";
import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("I am re-rendered or not please take a note on this.");

  return (
    <section className="flex flex-col gap-0">
      <header className="flex flex-col hap-6">
        <h1>I am the shared Header</h1>
        <ul>
          <li>
            <Link href="/page-two/page-two-child">Page Two Child One</Link>
          </li>
          <li>
            <Link href="/page-two/page-two-child-two">Page Two Child Two</Link>
          </li>
        </ul>
      </header>
      {children} <footer>Ima The Share Footer</footer>
    </section>
  );
}
