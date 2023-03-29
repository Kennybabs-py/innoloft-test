import { ReactNode, Fragment } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
