'use client'

import Header from "./components/header/Header";
import CardContainer from "./components/card/CardContainer";
import ExtensionsFilter from "./components/extensions-filter/ExtensionsFilter";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 w-full" >
      <Header />
      <ExtensionsFilter/>
      <div>
        <CardContainer />
      </div>
    </div>
  );
}
