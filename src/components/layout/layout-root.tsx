import * as React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function LayoutRoot({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
